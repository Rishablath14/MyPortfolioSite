import { connectToDatabase } from "@/app/(root)/lib/mongodb";
import Visitor from "@/app/(root)/models/visitor";
import { createHash } from "crypto";

export async function POST(request) {
  try {
    if (process.env.ENABLE_VISITOR_TRACKING !== "true") {
      return new Response(null, { status: 204 });
    }

    const { ip, userAgent, location } = await request.json();
    if (!ip || !userAgent || !location) {
      return Response.json({ message: "Invalid visitor payload" }, { status: 400 });
    }
    await connectToDatabase();
    const visitorId = createHash("sha256")
      .update(`${ip}:${process.env.VISITOR_HASH_SALT || "portfolio"}`)
      .digest("hex");
    let visitor = await Visitor.findOne({ ip: visitorId });

    if (visitor) {
      visitor.viewCount += 1;
      await visitor.save();
    } else {
      const newVisitor = new Visitor({
        ip: visitorId,
        location,
        userAgent: userAgent.slice(0, 180),
      });
      await newVisitor.save();
    }

    return Response.json({ message: "Visitor saved" }, { status: 201 });
  } catch (error) {
    console.error("Error in adding visitor", error);
    return Response.json({ message: "Error Saving Visitor" }, { status: 500 });
  }
}

export async function GET(request) {
  try {
    const authHeader = request.headers.get("authorization");
    const token = process.env.DASHBOARD_ACCESS_TOKEN?.trim();
    const submittedToken = authHeader?.replace(/^Bearer\s+/i, "").trim();

    if (!token || submittedToken !== token) {
      return Response.json({ message: "Unauthorized" }, { status: 401 });
    }

    await connectToDatabase();
    const visitors = await Visitor.find().select("location viewCount createdAt updatedAt");
    const totalVisitors = visitors.length;
    const totalVisits = visitors.reduce(
      (sum, visitor) => sum + visitor.viewCount,
      0
    );
    const topVisitor = await Visitor.findOne()
      .sort({ viewCount: -1 })
      .select("location viewCount updatedAt");
    return Response.json(
      { visitors, totalVisitors, totalVisits, topVisitor },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in fethcing visitor stats", error);
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
}

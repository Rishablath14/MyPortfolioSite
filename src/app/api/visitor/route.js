import { connectToDatabase } from "@/app/(root)/lib/mongodb";
import Visitor from "@/app/(root)/models/visitor";

export async function POST(request) {
  try {
    const { ip, userAgent, location } = await request.json();
    await connectToDatabase();
    let visitor = await Visitor.findOne({ ip });

    if (visitor) {
      visitor.viewCount += 1;
      await visitor.save();
    } else {
      const newVisitor = new Visitor({
        ip,
        location,
        userAgent,
      });
      await newVisitor.save();
    }

    return Response.json({ message: "Visitor saved" }, { status: 201 });
  } catch (error) {
    console.error("Error in adding visitor", error);
    return Response.json({ message: "Error Saving Visitor" }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectToDatabase();
    const visitors = await Visitor.find();
    const totalVisitors = visitors.length;
    const totalVisits = visitors.reduce(
      (sum, visitor) => sum + visitor.viewCount,
      0
    );
    const topVisitor = await Visitor.findOne().sort({ viewCount: -1 });
    return Response.json(
      { visitors, totalVisitors, totalVisits, topVisitor },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in fethcing visitor stats", error);
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
}

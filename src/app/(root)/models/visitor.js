import mongoose from "mongoose";

const visitorSchema = new mongoose.Schema(
  {
    ip: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    userAgent: {
      type: String,
      required: true,
    },
    viewCount: {
      type: Number,
      default: 1,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Visitor ||
  mongoose.model("Visitor", visitorSchema);

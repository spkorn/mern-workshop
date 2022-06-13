// ชื่อบทความ (title), เนื้อหาบทความ (content), ผู้เขียน (author), slug(url)
import mongoose from "mongoose";

const blogSchema = mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    content: {
      type: {},
      require: true,
    },
    author: {
      type: String,
      default: "Admin",
    },
    slug: {
      type: String,
      lowercase: true,
      unique: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blogs", blogSchema);

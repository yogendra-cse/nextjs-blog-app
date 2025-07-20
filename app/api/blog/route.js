

import { connectDB } from "@/lib/mongoose";

import Blog from "../../../models/blog"

export async function POST(req) {
  await connectDB();
  const data = await req.json();

  try {
    const blog = await Blog.create(data);
    return Response.json(blog, { status: 201 });
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}

export async function GET() {
  await connectDB();
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    return Response.json(blogs);
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}

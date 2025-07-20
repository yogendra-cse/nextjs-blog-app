import { connectDB } from "@/lib/mongoose";
import Blog from "@/models/blog";
import { Types } from "mongoose";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  await connectDB();

  if (!Types.ObjectId.isValid(params.id)) {
    return NextResponse.json({ error: "Invalid ID format" }, { status: 400 });
  }

  try {
    const blog = await Blog.findById(params.id);
    if (!blog) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(blog);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  await connectDB();

  if (!Types.ObjectId.isValid(params.id)) {
    return NextResponse.json({ error: "Invalid ID format" }, { status: 400 });
  }

  const data = await req.json();

  try {
    const blog = await Blog.findByIdAndUpdate(params.id, data, { new: true });
    if (!blog) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(blog);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  await connectDB();

  if (!Types.ObjectId.isValid(params.id)) {
    return NextResponse.json({ error: "Invalid ID format" }, { status: 400 });
  }

  try {
    const blog = await Blog.findByIdAndDelete(params.id);
    if (!blog) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json({ message: "Blog deleted" });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
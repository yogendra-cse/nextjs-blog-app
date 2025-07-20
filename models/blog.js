import mongoose from "mongoose";

const { Schema, model, models  } = mongoose;

const blogSchema = new Schema({

    title: { type: String, required: true },
    summary: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String, required: true }
});

const Blog = models.Blog || model("Blog", blogSchema);

export default Blog;

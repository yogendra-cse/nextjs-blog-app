"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Styles from "../Styles/newpost.module.css";

const EditBlog = () => {
  useEffect(() => {
    if (!window.cloudinary) {
      const script = document.createElement("script");
      script.src = "https://widget.cloudinary.com/v2.0/global/all.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const { id } = useParams();
  const [blog, setBlog] = useState({
    title: "",
    summary: "",
    content: "",
    image: "",
  });

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`/api/blog/${id}`);
        if (!res.ok) throw new Error("Failed to load blog");
        const data = await res.json();
        setBlog(data);
      } catch (error) {
        console.error(error.message);
      }
    };
    if (id) fetchBlog();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/blog/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog),
      });
      alert("done and dusted");
    } catch (error) {
      alert("error in updation");
    }
  };

  const handleImageUpload = () => {
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: "drfp9vied",
        uploadPreset: "react-estate-appPreset",
        multiple: false,
        folder: "posts",
      },
      (error, result) => {
        if (!error && result.event === "success") {
          console.log("Upload successful:", result.info.secure_url);
          setBlog({ ...blog, image: result.info.secure_url });
        }
      }
    );
    widget.open();
  };

  return (
    <div className={Styles.wrapper}>
      <h1 className={Styles.title}>Edit this Blog</h1>
      <form onSubmit={handleSubmit} className={Styles.form}>
        <input
          value={blog.title}
          onChange={(e) => setBlog({ ...blog, title: e.target.value })}
          placeholder="Enter blog title"
          className={Styles.input}
        />
        <input
          value={blog.summary}
          onChange={(e) => setBlog({ ...blog, summary: e.target.value })}
          placeholder="Brief summary"
          className={Styles.input}
        />
        <textarea
          value={blog.content}
          onChange={(e) => setBlog({ ...blog, content: e.target.value })}
          placeholder="Start writing..."
          rows={10}
          className={Styles.textarea}
        />
        <div>
          <label className={Styles.label}>Add Image</label>
          <button type="button" onClick={handleImageUpload} className={Styles.button}>
            Upload via Cloudinary
          </button>
          <input
            type="text"
            value={blog.image}
            onChange={(e) => setBlog({ ...blog, image: e.target.value })}
            placeholder="Or paste image URL manually"
            className={Styles.input}
          />
        </div>
        <button type="submit" className={Styles.button}>
          Publish Blog
        </button>
      </form>
    </div>
  );
};

export default EditBlog;

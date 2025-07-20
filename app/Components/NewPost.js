"use client"
import React from 'react'
import { useState, useEffect } from 'react';
import Styles from "../Styles/newpost.module.css"
const NewPost = () => {
    useEffect(() => {
        if (!window.cloudinary) {
            const script = document.createElement("script");
            script.src = "https://widget.cloudinary.com/v2.0/global/all.js";
            script.async = true;
            document.body.appendChild(script);
        }
    }, []);

    const [blog, setBlog] = useState({
        title: '',
        summary: '',
        content: '',
        image: '',
    });
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


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("/api/blog", {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(blog),

            })
            if (!res.ok) {
                const errData = await res.json();
                throw new error(errData.error || "Something went wrong")
            }
            const newBlog = await res.json();
            console.log("Blog created sucessully: !", newBlog);
            setBlog({
                title: '',
                summary: '',
                content: '',
                image: '',
            })
            alert("blog created", newBlog);
        } catch (error) {
            alert(error.message);
        }

    };


    return (
        <div className={Styles.wrapper}>
            <h1 className={Styles.title}>Create New Blog</h1>
            <form onSubmit={handleSubmit} className={Styles.form}>
                <input
                    value={blog.title}
                    onChange={(e) => setBlog({ ...blog, title: e.target.value })}
                    placeholder="Enter post title"
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
}




export default NewPost
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Styles from "../Styles/singlepage.module.css";
import Image from "next/image";


const SinglePage = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const res = await fetch(`/api/blog/${id}`);
                const data = await res.json();
                setBlog(data);
            } catch (err) {
                console.error("Failed to load blog");
            }
        };

        if (id) fetchBlog();
    }, [id]);

    if (!blog) return <p>Loading...</p>;

    return (
        <div className={Styles["blog-container"]}>
            <div className={Styles["blog-card"]}>
                <h1 className={Styles["blog-title"]}>{blog.title}</h1>

                <Image
                    src={blog.image}
                    alt="Blog Cover"
                    width={800}
                    height={400}
                    className={Styles["blog-image"]}
                />
                <p className={Styles["blog-summary"]}>{blog.summary}</p>
                <div className={Styles["blog-content"]}>{blog.content}</div>
            </div>
        </div>
    );
};

export default SinglePage;

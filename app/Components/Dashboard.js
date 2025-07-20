"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Styles from "../Styles/dashboard.module.css";
import { useRouter } from 'next/navigation';

const Dashboard = ({ role }) => {
  const [blogs, setBlogs] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/blog");
        const data = await res.json();
        setBlogs(data);
      } catch (error) { }
    };
    fetchBlogs();
  }, []);

  const handleEdit = (id) => {
    router.push(`/edit/${id}`);
  };




  const handleDelete = async (id) => {
    try {
      const res = await fetch(`/api/blog/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setBlogs(prevBlogs => prevBlogs.filter(blog => blog._id !== id));
        alert("Blog deleted successfully...");
      } else {
        const error = await res.json();
        alert("Failed to delete blog: " + error.error);
      }
    } catch (error) {
      alert("Error in deleting blog");
    }
  };




  return (
    <div className={Styles.cardcontainer}>
      {blogs.map((blog) => (
        <div className={Styles.blogCard} key={blog._id}>
          <div onClick={() =>
            router.push(role === "admin" ? `/blog/${blog._id}` : `/blogs/${blog._id}`)
          }>
            <Image
              className={Styles.cardImg}
              src={blog.image || "/sampleInmg.jpg"}
              width={300}
              height={240}
              alt="img"
            />
          </div>
          <div className={Styles.cardText}>
            <h3 onClick={() =>
              router.push(role === "admin" ? `/blog/${blog._id}` : `/blogs/${blog._id}`)
            }>{blog.title}</h3>
            <p>{blog.summary}</p>
          </div>
          {role === "admin" &&
            <div className={Styles.buttons}>
              <button className={Styles.editbtn} onClick={() => handleEdit(blog._id)}>Edit</button>
              <button className={Styles.deletebtn} onClick={() => handleDelete(blog._id)}>Delete</button>
            </div>
          }
        </div>
      ))}
    </div>
  );
};

export default Dashboard;

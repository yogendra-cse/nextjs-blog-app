"use client";
import React, { useEffect, useState } from "react";
import styles from "../Styles/userprofile.module.css"

const Page = () => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    const role = getCookie("role");
    const userEmail = getCookie("email");
    setEmail(userEmail);
  }, []);

  function getCookie(name) {
    const match = document.cookie.match(
      new RegExp("(^| )" + name + "=([^;]+)")
    );
    return match ? match[2] : null;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>User Profile Page</h1>
      <p className={styles.email}>{email || "No email found"}</p>
    </div>
  );
};

export default Page;

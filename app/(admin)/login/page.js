"use client";
import React, { useState } from "react";
import Styles from "../../Styles/adminlogin.module.css";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (role !== "admin") {
      alert("only admin can login here, Please go back or login as admin");
    } else {
      document.cookie = "token=admin-token; path=/; max-age=7200"; // ✅ fixed typo: 'cooke'
      document.cookie = `email=${email}; path=/; max-age=7200`;
      router.push("/dashboard");
    }
  };

  return (
    <div className={Styles.mainDiv}>
      <div className={Styles.formContainer}>
        <input
          className={Styles.input}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <input
          className={Styles.input}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
        />
        <input
          className={Styles.input}
          type="text"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          placeholder="Enter your role"
          required
        />
        <button className={Styles.submitButton} onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Page;

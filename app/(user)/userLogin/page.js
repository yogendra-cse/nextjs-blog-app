"use client";
import React, { useState } from 'react';
import Styles from "../../Styles/userlogin.module.css";
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (role !== "user") {
      alert("Only user can login here. Please go back or login as user.");
    } else {
      document.cookie = 'token=user-token; path=/; max-age=7200';
      document.cookie = `email=${email}; path=/; max-age=7200`;
      router.push("/userProfile");
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
          required
          placeholder="Enter your email"
        />
        <input
          className={Styles.input}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Enter your password"
        />
        <input
          className={Styles.input}
          type="text"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
          placeholder="Enter your role"
        />
        <button className={Styles.submitButton} onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Page;

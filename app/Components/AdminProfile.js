'use client';
import Styles from "../Styles/profile.module.css";
import { useState,useEffect } from "react";
export default function ProfilePage() {

  const [email, setEmail] = useState("");
  useEffect(() => {
    const userEmail = getCookie("email");
    setEmail(userEmail);
  }, []);
  function getCookie(name) {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? match[2] : null;
  }
  const profile = {
    name: 'Admin User',
    email: email,
    role: 'Administrator',
  };

  return (
    <div className={Styles.container}>
      <div className={Styles.profileHeader}>
        <h2>Profile</h2>
        <p>Personal information overview</p>
      </div>
      <div className={Styles.profileDetails}>
        <div className={Styles.detailItem}>
          <span className={Styles.label}>Name:</span>
          <span className={Styles.value}>{profile.name}</span>
        </div>
        <div className={Styles.detailItem}>
          <span className={Styles.label}>Email:</span>
          <span className={Styles.value}>{profile.email}</span>
        </div>
        <div className={Styles.detailItem}>
          <span className={Styles.label}>Role:</span>
          <span className={Styles.value}>{profile.role}</span>
        </div>
      </div>
    </div>
  );
}

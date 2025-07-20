

import Link from 'next/link';
import Styles from "../Styles/navadmin.module.css"

export default function AdminNavbar() {
  return (
    <nav className={Styles.navbar}>
      <div className={Styles.logo}>BlogNest</div>
      <ul className={Styles.navList}>
        <li><Link href="/">Main page</Link></li>
        <li><Link href="/dashboard">Dashboard</Link></li>
        <li><Link href="/create">Create</Link></li>
        <li><Link href="/profile">Profile</Link></li>
      </ul>
    </nav>
  );
}
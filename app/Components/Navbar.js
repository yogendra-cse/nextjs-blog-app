import Link from 'next/link';
import Styles from "../Styles/navbar.module.css"
export default function Home() {
  return (
    <div className={Styles.page}>
      <nav className={Styles.navbar}>
        <ul className={Styles.navList}>
          <li><Link href="/login">Login as admin</Link></li>
          <li><Link href="/userLogin">Login as user</Link></li>
        </ul>
      </nav>
      <div className={Styles.coverImageSection}>
        <h1 className={Styles.coverText}>Welcome to Our Blog</h1>
      </div>
    </div>
  );
}

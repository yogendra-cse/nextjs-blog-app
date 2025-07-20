

import Link from 'next/link';
import Styles from "../Styles/navadmin.module.css"


export default function AdminNavbar() {
    return (
        <nav className={Styles.navbar}>
            <div className={Styles.logo}>BlogNest</div>
            <ul className={Styles.navList}>
                <li><Link href="/">Main page</Link></li>
                <li><Link href="/listofblogs">List of blogs</Link></li>
                <li><Link href="/userProfile">My profile</Link></li>
                <li><Link href="/TermsandConditions">Terms and conditions</Link></li>
            </ul>
        </nav>
    );
}
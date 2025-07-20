import AdminNavbar from "../Components/AdminNavbar";
export default function AdminLayout({ children }) {
  return (
    <div className="admin-layout">
      <AdminNavbar />
      <main>{children}</main>
    </div>
  );
}

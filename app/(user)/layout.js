import UserNavbar from "../Components/UserNavbar"
export default function AdminLayout({ children }) {
  return (
    <div className="admin-layout">
      <UserNavbar />
      <main>{children}</main>
    </div>
  );
}

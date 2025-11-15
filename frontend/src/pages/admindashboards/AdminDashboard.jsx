import { useSelector } from "react-redux";

function AdminDashboard() {
  const { user } = useSelector((state) => state.auth.user.name);
  return (
    <section>
      <h1>Welcome {user}</h1>
      <aside>Navigation</aside>
      <main>Display</main>
    </section>
  );
}

export default AdminDashboard;

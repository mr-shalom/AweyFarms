import { useState } from "react";
import { login } from "../auth/authSlice";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Logo from "../components/Logo";

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [error, setError] = useState({});

  const handleChange = function (e) {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async function (e) {
    e.preventDefault();
    if (!userData.email || !userData.password)
      return setError({ message: "Enter valid data in the input fields" });
    try {
      const res = await dispatch(login(userData)).unwrap();
      if (res && res.user && res.token) {
        if (res.user.role === "customer") {
          navigate("/dashboard/customer");
        }
        if (res.user.role === "admin") {
          navigate("/dashboard/admin");
        }
      }
    } catch (error) {
      setError({
        message: error.message || "Error: Login credentials incorrect",
      });
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div className="">
          <Logo />
          <h1>Log in</h1>
        </div>
        {error.message && <p>{error.message}</p>}
        <div className="">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={userData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={userData.password}
            onChange={handleChange}
            required
          />
        </div>
        <Button className="">Login</Button>

        <p>
          Don't have an account yet ? <Link to="/auth/signup">Sign up</Link>
        </p>
      </form>
    </section>
  );
}

export default LoginPage;

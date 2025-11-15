import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../auth/authSlice";
import Logo from "../components/Logo";
import { clearError } from "../auth/authSlice";
import Button from "../components/Button";

function Signup() {
  const navigate = useNavigate();

  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    address: "",
    role: "customer",
  });

  const [error, setError] = useState({});
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();

  const handleChange = function (e) {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = async function (e) {
    e.preventDefault();
    if (
      !newUser.name ||
      !newUser.email ||
      !newUser.password ||
      !newUser.confirmPassword ||
      !newUser.phone ||
      !newUser.address
    ) {
      return setError({
        message: "Please fill in all the fields with valid data",
      });
    }
    if (newUser.password !== newUser.confirmPassword) {
      setError({ message: "Please passwords do not match, try again" });
      return;
    }

    try {
      const res = await dispatch(signUp(newUser)).unwrap();
      if (res && res.user && res.token) {
        if (res.role === "customer") {
          navigate("/dashboard/userprofile");
        }
        if (res.role === "admin") {
          navigate("/dashboard/admin");
        }
      }
    } catch (error) {
      setError(error);
    }

    setNewUser({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      address: "",
      role: "customer",
    });

    setIsChecked(false);
    setError({});
    // dispatch(clearError());
  };

  return (
    <section>
      <form onSubmit={isChecked && handleSubmit}>
        <div>
          <Logo />
          <h1>Create an account</h1>
        </div>

        {error.message && <p>{error.message}</p>}
        <div>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={newUser.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={newUser.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={newUser.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={newUser.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={newUser.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            id="address"
            value={newUser.address}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <p>
            {" "}
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              onChange={(e) => setIsChecked(e.target.checked)}
              required
            />{" "}
            Do you agree to our terms and conditions ?
          </p>
          <p>
            Already have an account ? <Link to="/auth/login">Login</Link>
          </p>
        </div>
        <Button isChecked={!isChecked}>Signup</Button>
      </form>
    </section>
  );
}

export default Signup;

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../auth";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import AppLayout from "./AppLayout";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const response = useSelector((state) => state.auth);

  // State to manage form input values
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Handler to update form input values
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Dispatch the loginUser action
    dispatch(loginUser(formData))
      .then(() => {
        const token = response.token;
        if (token) {
          localStorage.setItem("token", token);
          localStorage.setItem("user", response.name);
          localStorage.setItem("user_type", response.user_type);

          if (response.user_type === 2) {
            navigate("/dreamCircles");
          } else if (response.user_type === 1) {
            navigate("/appLayoutMentor");
          }
        } else {
          alert("Login failed. Please check your credentials.");
        }
      })
      .catch((error) => {
        console.error("An error occurred:", error);
        alert("An error occurred while trying to login.");
      });
  };

  return (
    <AppLayout>
      <div className={styles.loginToAccount}>Login to your account</div>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.forgotPassword}>
            <a href="#">Forgot password?</a>
          </div>

          <div className={styles.inputGroup}>
            <button type="submit" className={styles.loginButton}>
              Login
            </button>
          </div>
        </form>
      </div>
    </AppLayout>
  );
};

export default Login;

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Login.module.css";
import axios from "axios";
import AppLayout from "./AppLayout";

const Login = () => {
  const navigate = useNavigate();

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
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to your backend API
      const response = await axios.post(
        "http://13.126.8.147/api/quran_dreamers/login/",
        formData
      );

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", response.data.name);

        if (response.data.user_type === 2) {
          navigate("/dreamCircles"); // Navigate to dreamCircles
        } else if (response.data.user_type === 1) {
          navigate("/createCircle"); // Navigate to createCircle
        }
      } else {
        // If unsuccessful, show an alert
        alert("Login failed. Please check your credentials.");
      }
    } catch (error) {
      // Handle any errors that occurred during the request
      console.error("An error occurred:", error);
      alert("An error occurred while trying to login.");
    }
  };
  return (
    <AppLayout>
      <div className={styles.loginToAccount}>Login to your account</div>
      <div className={styles.container}>
        {/* <div className={styles.socialIconsContainer}>
          <button className={styles.socialButtonFb}>
            <img src="/Facebook Icon.svg" alt="Facebook" />
          </button>
          <button className={styles.socialButtonG}>
            <img src="/GoogleIcon.svg" alt="Google" />
          </button>
          <button className={styles.socialButtonA}>
            <img src="/AppleIIcon.svg" alt="Apple" />
          </button>
        </div> */}

        {/* Email and Password Inputs */}
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

          {/* Login Button */}
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

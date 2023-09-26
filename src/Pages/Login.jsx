import { useState } from "react";
import styles from "./Login.module.css"; // Import your CSS styles for the component
import AppLayout from "./AppLayout";

const Login = () => {
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
    // Perform login logic here
    console.log("Logging in with:", formData.email, formData.password);
    // You can send a POST request to your login API endpoint here
  };

  return (
    <AppLayout>
      <div className={styles.loginToAccount}>Login to your account</div>
      <div className={styles.container}>
        <div className={styles.socialIconsContainer}>
          <button className={styles.socialButtonFb}>
            {/* <img src="/Facebook Icon.svg" alt="Facebook" /> */}
          </button>
          <button className={styles.socialButtonG}>
            {/* <img src="/GoogleIcon.svg" alt="Google" /> */}
          </button>
          <button className={styles.socialButtonA}>
            {/* <img src="/AppleIIcon.svg" alt="Apple" /> */}
          </button>
        </div>

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

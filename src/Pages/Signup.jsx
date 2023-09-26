import { useState } from "react";
import axios from "axios";
import styles from "./Signup.module.css";
import AppLayout from "./AppLayout";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    about_me: "",
    user_type: 1,
    gender: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://13.126.8.147/api/quran_dreamers/signup/",
        formData
      );
      console.log(response.data);
      // Handle success, e.g., redirect to a success page
    } catch (error) {
      console.error(error);
      // Handle error, e.g., display an error message
    }
  };

  return (
    <AppLayout>
      <div className={styles.signupTitle}>Sign Up</div>
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
          <div className={styles.inputGroup}>
            <label>First Name:</label>
            <input
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Last Name:</label>
            <input
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label>About Me:</label>
            <textarea
              name="about_me"
              value={formData.about_me}
              onChange={handleChange}
            />
          </div>
          <div className={styles.inputGroup}>
            <label>User Type:</label>
            <select
              name="user_type"
              value={formData.user_type}
              onChange={handleChange}
              required
            >
              {/* Options for user type */}
              <option value="1">Type 1</option>
              <option value="2">Type 2</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className={styles.inputGroup}>
            <label>Gender:</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              {/* Options for gender */}
              <option value="1">Male</option>
              <option value="2">Female</option>
              {/* Add more options as needed */}
            </select>
          </div>

          <div className={styles.inputGroup}>
            <button type="submit">Sign Up</button>
          </div>
          <div className={styles.alreadyAccount}>
            Already have an account? <a href="#">Login</a>
          </div>
        </form>
      </div>
    </AppLayout>
  );
};

export default SignUpForm;

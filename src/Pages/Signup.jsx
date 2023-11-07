import { useState } from "react";
import styles from "./Signup.module.css";
import AppLayout from "./AppLayout";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../ui/Spinner";

const SignUpForm = () => {
  const { user_type } = useParams();
  const navigate = useNavigate();
  const isMentor = user_type === "1";

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    about_me: "",
    user_type: user_type || "1",
    gender: "0",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(
        "http://13.126.8.147/api/quran_dreamers/signup/",
        formData
      );
      setIsLoading(false);

      if (response.data) {
        alert("Sign up successful.");
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      if (error.response.data.email) {
        alert("Sign up failed: " + error.response.data.email[0]);
      } else if (error.response.data.non_field_errors) {
        alert("Sign up failed: " + error.response.data.non_field_errors[0]);
      } else {
        alert("Sign up failed for some reason");
      }
    }
  };

  return (
    <AppLayout>
      <div className={styles.signupTitle}>
        Sign Up As {isMentor ? "Mentor" : "Student"}
      </div>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.spinnerContainer}>
            {isLoading && <Spinner />}
          </div>
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
              className={styles.about_me}
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Gender:</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              className={styles.gender}
            >
              <option value="0">Male</option>
              <option value="1">Female</option>
            </select>
          </div>
          <div className={styles.inputGroup}>
            <button type="submit">Sign Up</button>
          </div>
          <div className={styles.alreadyAccount}>
            Already have an account? <a href="/login">Login</a>
          </div>
        </form>
      </div>
    </AppLayout>
  );
};

export default SignUpForm;

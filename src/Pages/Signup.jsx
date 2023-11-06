import { useState } from "react";
import { supabase } from "../../client"; // Import your Supabase client
import styles from "./Signup.module.css";
import AppLayout from "./AppLayout";
import axios from "axios"; // Import axios
import { useNavigate, useParams } from "react-router-dom";

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
    gender: "1",
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
      const { user, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        data: {
          first_name: formData.first_name,
          last_name: formData.last_name,
          about_me: formData.about_me,
          gender: formData.gender,
          sendVerificationEmail: "1", // This will trigger email verification
        },
      });

      if (error) {
        alert("Sign up failed: " + error.message);
      } else {
        alert("Sign up successful. A verification email has been sent.");

        // Make a POST request to your API endpoint
        const response = await axios.post(
          "http://13.126.8.147/api/quran_dreamers/signup/",
          formData
        );

        if (response.data) {
          navigate("/login");
        } else {
          alert("Input Invalid");
        }

        // Redirect to a success page or perform other actions as needed.
      }
    } catch (error) {
      console.error(error);
      // Handle error, e.g., display an error message
    }
  };

  return (
    <AppLayout>
      <div className={styles.signupTitle}>
        Sign Up As {isMentor ? "Mentor" : "Student"}
      </div>
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
              <option value="1">Male</option>
              <option value="0">Female</option>
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

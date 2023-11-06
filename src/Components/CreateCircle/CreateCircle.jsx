import { useState } from "react";
import axios from "axios";
import styles from "./CreateCircle.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS
import { useNavigate } from "react-router-dom";

const StudyCircleForm = () => {
  const navigate = useNavigate();

  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const prerequisites = [
    "Nahw Basics",
    "Sarf Basics",
    "Intermediate Nahw",
    "Advance Nahw",
    "Advanced Sarf",
    "Basic Reader",
    "Intermediate Reader",
    "Advanced Reader",
  ];

  const [formData, setFormData] = useState({
    days: [],
    from_date: "",
    to_date: "",
    times: ["", ""],
    pre_requisites: [],
    about_circle: "",
    class_link: "",
    maximum_students: "",
    category: "",
    is_sister_only: false,
    is_exercised_based: false,
    language: "1",
    is_approved: true,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "days" || name === "pre_requisites") {
      const selectedValue = parseInt(value);

      if (name === "days") {
        if (checked) {
          setFormData({
            ...formData,
            days: [...formData.days, selectedValue],
          });
        } else {
          setFormData({
            ...formData,
            days: formData.days.filter((day) => day !== selectedValue),
          });
        }
      } else if (name === "pre_requisites") {
        if (checked) {
          setFormData({
            ...formData,
            pre_requisites: [...formData.pre_requisites, selectedValue],
          });
        } else {
          setFormData({
            ...formData,
            pre_requisites: formData.pre_requisites.filter(
              (prereq) => prereq !== selectedValue
            ),
          });
        }
      }
    } else if (name === "class_timing_from" || name === "class_timing_to") {
      setFormData({
        ...formData,
        times: [
          name === "class_timing_from" ? value : formData.times[0],
          name === "class_timing_to" ? value : formData.times[1],
        ],
      });
    } else {
      setFormData({
        ...formData,
        [name]:
          type === "number"
            ? parseInt(value)
            : type === "checkbox"
            ? checked
            : value,
      });
    }
  };

  const accessToken = localStorage.getItem("token");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!accessToken) {
      console.error("Access token not found in local storage");
      return;
    }

    try {
      const response = await axios.post(
        "http://13.126.8.147/api/quran_dreamers/study_circles/",
        formData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data);

      toast.success("Circle created successfully");

      setFormData({
        days: [],
        from_date: "2023-06-27",
        to_date: "2023-06-29",
        times: ["14:00", "18:00"],
        pre_requisites: [],
        about_circle: "",
        class_link: "",
        maximum_students: "",
        category: "",
        is_sister_only: false,
        is_exercised_based: false,
        language: "1",
        is_approved: true,
      });

      navigate("/appLayoutMentor/approvalPending");
    } catch (error) {
      console.error("Error creating circle:", error);
    }
  };

  return (
    <div className={styles.mainContainer}>
      <h2>Create Study Circle</h2>
      <form onSubmit={handleSubmit}>
        <div className={`${styles.category} ${styles.formField}`}>
          <label>Select your circle category:</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
          >
            <option value="">Select category</option>
            <option value="0">Nahw Basics</option>
            <option value="1">Sarf Basics</option>
            <option value="2">Intermediate Nahw</option>
            <option value="3">Advance Nahw</option>
            <option value="4">Advanced Sarf</option>
            <option value="5">Basic Reader</option>
            <option value="6">Intermediate Reader</option>
            <option value="7">Advanced Reader</option>
          </select>
        </div>

        <div className={`${styles.days} ${styles.formField}`}>
          <label>Select Days:</label>
          {daysOfWeek.map((day, index) => (
            <label className={styles.dayLabel} key={index}>
              <input
                type="checkbox"
                name="days"
                value={index + 1}
                checked={formData.days.includes(index + 1)}
                onChange={handleInputChange}
              />
              {day}
            </label>
          ))}
        </div>

        <label className={`${styles.pre_requisites} ${styles.formField}`}>
          Pre-requisites:
          {prerequisites.map((prerequisite, index) => (
            <label className={styles.dayLabel} key={index}>
              <input
                type="checkbox"
                name="pre_requisites"
                value={index}
                checked={formData.pre_requisites.includes(index)}
                onChange={handleInputChange}
              />
              {prerequisite}
            </label>
          ))}
        </label>

        <div className={`${styles.dateFields} ${styles.formField}`}>
          <label className={`${styles.dateLabel}`}>From Date:</label>
          <input
            type="date"
            name="from_date"
            value={formData.from_date}
            onChange={handleInputChange}
            pattern="\d{4}-\d{2}-\d{2}"
            placeholder="YYYY-MM-DD"
          />
          <label className={`${styles.dateLabel}`}>To Date:</label>
          <input
            type="date"
            name="to_date"
            value={formData.to_date}
            onChange={handleInputChange}
            pattern="\d{4}-\d{2}-\d{2}"
            placeholder="YYYY-MM-DD"
          />
        </div>
        <div className={`${styles.classTimingFields} ${styles.formField}`}>
          <label className={`${styles.classTimingLabel}`}>Class Timing:</label>
          <input
            type="time"
            name="class_timing_from"
            placeholder="From"
            value={formData.times[0]}
            onChange={handleInputChange}
            step="3600"
          />
          <span className={`${styles.classTimingSeparator}`}>to</span>
          <input
            type="time"
            name="class_timing_to"
            placeholder="To"
            value={formData.times[1]}
            onChange={handleInputChange}
            step="60"
          />
        </div>

        <label className={styles.formField}>
          Class Link:
          <input
            type="text"
            name="class_link"
            value={formData.class_link}
            onChange={handleInputChange}
          />
        </label>
        <label className={styles.formField}>
          Maximum Students:
          <input
            type="number"
            name="maximum_students"
            value={formData.maximum_students}
            onChange={handleInputChange}
          />
        </label>

        <label className={styles.formField}>
          Is Sister Only:
          <input
            type="checkbox"
            name="is_sister_only"
            checked={formData.is_sister_only}
            onChange={handleInputChange}
          />
        </label>
        <label className={styles.formField}>
          Is Exercise Based:
          <input
            type="checkbox"
            name="is_exercised_based"
            checked={formData.is_exercised_based}
            onChange={handleInputChange}
          />
        </label>
        <label className={styles.formField}>
          Language:
          <select
            name="language"
            value={formData.language}
            onChange={handleInputChange}
          >
            <option value="1">English</option>
            <option value="2">Uzbek</option>
            <option value="3">Urdu</option>
            <option value="4">Indonesian</option>
          </select>
        </label>

        <label className={styles.formField}>
          Write about your circle (100-150 Characters)
          <textarea
            className={styles.about_circle}
            name="about_circle"
            value={formData.about_circle}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit" className={styles.formField}>
          Submit
        </button>
      </form>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default StudyCircleForm;

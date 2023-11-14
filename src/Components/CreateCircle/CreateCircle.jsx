import { useState } from "react";
import axios from "axios";
import styles from "./CreateCircle.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Spinner from "../../ui/Spinner";

const StudyCircleForm = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const prerequisites = [
    "Can Read Qur'an",
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
    language: "0",
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
      const localTime = value;
      const [hours, minutes] = localTime.split(":");
      const localDateTime = new Date();
      localDateTime.setUTCHours(hours);
      localDateTime.setUTCMinutes(minutes);
      const utcTime = localDateTime.toISOString().substring(11, 16);

      setFormData({
        ...formData,
        times: [
          name === "class_timing_from" ? utcTime : formData.times[0],
          name === "class_timing_to" ? utcTime : formData.times[1],
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
    setIsLoading(true);

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
      setIsLoading(false);
      console.log(response);

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
      setIsLoading(false);
      console.error(error);
      let data = error.response.data;
      let first_error = Object.values(data)[0];

      if (first_error && first_error.length > 0) {
        // Display the first error
        console.log(first_error[0]);
        alert("Error creating circle: " + first_error[0]);
      } else {
        // Handle the case where there are no errors or the structure is unexpected
        console.error("Unexpected error response structure:", data);
        alert("Unexpected error creating circle.");
      }
    }
  };

  return (
    <div className={styles.mainContainer0}>
      <div className={styles.mainContainer}>
        <h2>Create Study Circle</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.spinnerContainer}>
            {isLoading && <Spinner />}
          </div>
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
              <option value="4">Advanced Sarf </option>
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
                  value={index}
                  checked={formData.days.includes(index)}
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

          <div className={styles.timeField}>
            <label className={`${styles.classTimingLabel}`}>
              Class Timing:
            </label>
            <div className="time-input">
              <input
                type="time"
                name="class_timing_from"
                value={formData.times[0]}
                onChange={handleInputChange}
              />
              <span>to</span>
              <input
                type="time"
                name="class_timing_to"
                value={formData.times[1]}
                onChange={handleInputChange}
              />
            </div>
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
              <option value="0">English</option>
              <option value="1">Urdu</option>
              <option value="2">Indonesian</option>
              <option value="3">Uzbek</option>
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
    </div>
  );
};

export default StudyCircleForm;

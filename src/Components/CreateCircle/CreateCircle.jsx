import { useState } from "react";
import axios from "axios";
import styles from "./CreateCircle.module.css";

const StudyCircleForm = () => {
  const [formData, setFormData] = useState({
    days: [1],
    from_date: "2023-06-27",
    to_date: "2023-06-29",
    times: ["14:00"],
    pre_requisites: [],
    about_circle: "",
    class_link: "",
    number_of_students: 0,
    maximim_students: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "days") {
      // Convert the selected options to an array of strings
      const selectedOptions = Array.from(
        e.target.selectedOptions,
        (option) => option.value
      );
      setFormData({
        ...formData,
        [name]: selectedOptions,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const accessToken =
    "7802f922369e73c914d7facc03e903f9a303fd5890ac208868febba37090e33e";

  const handleSubmit = async (e) => {
    e.preventDefault();

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

      console.log("Circle created successfully:", response.data);

      setFormData({
        days: [1],
        from_date: "2023-06-27",
        to_date: "2023-06-29",
        times: ["14:00"],
        pre_requisites: [],
        about_circle: "This circle is about nahaw",
        class_link: "www.zoomlinkhere.com",
        number_of_students: 0,
        maximum_students: [],
      });
    } catch (error) {
      console.error("Error creating circle:", error);
      console.log();
    }
  };

  return (
    <div className={styles.mainContainer}>
      <h2>Create Study Circle</h2>
      <form onSubmit={handleSubmit}>
        <label className={styles.category}>
          Select your circle category:
          <select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
          >
            <option value="">Select category</option>
            <option value="1">Nahw Basics</option>
            <option value="2">Nahw Advance</option>
            <option value="3">Reader Basics</option>
            <option value="4">Reader Basics</option>
            <option value="5">Sarf Basics</option>
            <option value="6">Sarf Advanced</option>
          </select>
        </label>
        <label>
          Select Days:
          <select
            multiple
            name="days"
            value={formData.days}
            onChange={handleInputChange}
          >
            <option value="Sunday">Sunday</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
          </select>
        </label>

        <label>
          Pre-requisites (one per line):
          <textarea
            name="pre_requisites"
            value={formData.pre_requisites.join("\n")}
            onChange={(e) => {
              const prerequisites = e.target.value.split("\n");
              setFormData({ ...formData, pre_requisites: prerequisites });
            }}
          />
        </label>
        <div className={styles.dateFields}>
          <label className={styles.dateLabel}>
            From Date:
            <input
              type="text"
              name="from_date"
              value={formData.from_date}
              onChange={handleInputChange}
            />
          </label>
          <label className={styles.dateLabel}>
            To Date:
            <input
              type="text"
              name="to_date"
              value={formData.to_date}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className={styles.classTimingFields}>
          <label className={styles.classTimingLabel}>Class Timing:</label>
          <input
            type="text"
            name="class_timing_from"
            placeholder="From"
            value={formData.class_timing_from}
            onChange={handleInputChange}
          />
          <span className={styles.classTimingSeparator}>to</span>
          <input
            type="text"
            name="class_timing_to"
            placeholder="To"
            value={formData.class_timing_to}
            onChange={handleInputChange}
          />
        </div>

        <label>
          Class Link:
          <input
            type="text"
            name="class_link"
            value={formData.class_link}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Number of Students:
          <input
            type="text"
            name="number_of_students"
            value={formData.number_of_students}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Maximum Students:
          <input
            type="text"
            name="maximum_students"
            value={formData.maximum_students}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Write about your circle (100-150 Characters)
          <textarea
            className={styles.about_circle}
            name="about_circle"
            value={formData.about_circle}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default StudyCircleForm;

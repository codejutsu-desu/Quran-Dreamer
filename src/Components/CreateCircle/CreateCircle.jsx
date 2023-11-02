import { useState } from "react";
import axios from "axios";

const StudyCircleForm = () => {
  const [formData, setFormData] = useState({
    days: [1],
    from_date: "2023-06-27",
    to_date: "2023-06-29",
    times: ["14:00"],
    pre_requisites: [],
    about_circle: "This circle is about nahaw",
    class_link: "www.zoomlinkhere.com",
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
    <div>
      <h2>Create Study Circle</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Days:
          <select
            multiple
            name="days"
            value={formData.days}
            onChange={handleInputChange}
          >
            <option value="1">Monday</option>
            <option value="2">Tuesday</option>
          </select>
        </label>
        <label>
          From Date:
          <input
            type="text"
            name="from_date"
            value={formData.from_date}
            onChange={handleInputChange}
          />
        </label>
        <label>
          To Date:
          <input
            type="text"
            name="to_date"
            value={formData.to_date}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Times:
          <input
            type="text"
            name="times"
            value={formData.times}
            onChange={handleInputChange}
          />
        </label>
        {/* <label>
          Pre-requisites (one per line):
          <textarea
            name="pre_requisites"
            value={formData.pre_requisites.join("\n")}
            onChange={handleInputChange}
          />
        </label> */}

        <label>
          About Circle:
          <input
            type="text"
            name="about_circle"
            value={formData.about_circle}
            onChange={handleInputChange}
          />
        </label>
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

        <button type="submit">Create Circle</button>
      </form>
    </div>
  );
};

export default StudyCircleForm;

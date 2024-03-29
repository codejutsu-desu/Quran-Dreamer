import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { DateTime } from "luxon";

const EditCircle = () => {
  const { circleId } = useParams();
  console.log(circleId);
  const navigate = useNavigate();

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
    "Nahw Basics",
    "Sarf Basics",
    "Intermediate Nahw",
    "Advance Nahw",
    "Advanced Sarf",
    "Basic Reader",
    "Intermediate Reader",
    "Advanced Reader",
    "Advanced Structures",
    "EMSA",
    "Quran",
  ];

  const [isUnlimited, setIsUnlimited] = useState(false);

  const [formData, setFormData] = useState({
    days: [],
    from_date: "",
    to_date: "",
    times: ["", ""],
    pre_requisites: [],
    about_circle: "",
    class_link: "",
    maximum_students: "0",
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
              (prereq) => prereq !== selectedValue,
            ),
          });
        }
      }
    } else if (name === "class_timing_from" || name === "class_timing_to") {
      console.log(value);
      const newTimes = [...formData.times];
      newTimes[name === "class_timing_from" ? 0 : 1] = value;

      setFormData({
        ...formData,
        times: newTimes,
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
    const localTimeZone = DateTime.local().zoneName;

    const utcTimes = formData.times.map((time) =>
      DateTime.fromFormat(time, "HH:mm", { zone: localTimeZone })
        .toUTC()
        .toFormat("HH:mm"),
    );

    e.preventDefault();

    if (!accessToken) {
      console.error("Access token not found in local storage");
      return;
    }

    try {
      const response = await axios.patch(
        `http://13.126.8.147/api/quran_dreamers/study_circle/${circleId}`,
        {
          ...formData,
          times: utcTimes,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        },
      );
      console.log(formData, response);

      toast.success("Circle edited successfully");

      setFormData({
        days: [],
        from_date: "2023-06-27",
        to_date: "2023-06-29",
        times: ["00:00", "00:00"],
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

      navigate("/dashboardMentorLayout");
    } catch (error) {
      console.log(error.response.data);
      let data = error.response.data;
      let first_error = Object.values(data)[0];

      if (first_error && first_error.length > 0) {
        toast.error(first_error[0], {
          position: "top-center",
          hideProgressBar: true,
          autoClose: 3000,
        });
      } else {
        toast.error("Unexpected error editing circle.", {
          position: "top-center",
          hideProgressBar: true,
          autoClose: 3000,
        });
      }
    }
  };

  return (
    <div className="m-2 flex min-h-screen flex-col rounded-xl border-2 border-solid border-theme p-2">
      <Toaster />
      <div className="my-3 ml-auto mr-auto text-base font-bold sm:text-lg md:text-xl lg:text-3xl xl:text-3xl">
        Edit your Circle
      </div>
      <form onSubmit={handleSubmit} className="space-y-2">
        <div className="flex">
          <label className="text-sm font-bold sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            Select your circle category:
          </label>
          <select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            className="ml-2 rounded-lg border-2 border-solid border-theme bg-transparent text-sm font-normal text-black sm:text-base md:text-lg lg:text-xl xl:text-2xl "
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
            <option value="8">Advanced Structures</option>
            <option value="9">EMSA</option>
            <option value="10">Quran</option>
          </select>
        </div>

        <div className="flex">
          <label className="text-sm font-bold sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            Select Days:
          </label>
          {daysOfWeek.map((day, index) => (
            <label
              className="ml-2 text-sm font-bold sm:text-base md:text-lg lg:text-xl xl:text-2xl"
              key={index}
            >
              <input
                type="checkbox"
                name="days"
                value={index}
                checked={formData.days.includes(index)}
                onChange={handleInputChange}
                className="text-sm font-bold sm:text-base md:text-lg lg:text-xl xl:text-2xl"
              />
              {day}
            </label>
          ))}
        </div>

        <label className="text-sm font-bold sm:text-base md:text-lg lg:text-xl xl:text-2xl">
          Pre-requisites:
          {prerequisites.map((prerequisite, index) => (
            <label className="" key={index}>
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

        <div className="flex">
          <label className="text-sm font-bold sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            From Date:
          </label>
          <input
            type="date"
            name="from_date"
            value={formData.from_date}
            onChange={handleInputChange}
            pattern="\d{4}-\d{2}-\d{2}"
            placeholder="YYYY-MM-DD"
            className="  rounded-lg border-2 border-solid border-theme bg-transparent font-bold  text-black sm:text-base md:text-lg lg:text-xl xl:text-2xl"
          />
          <label className="ml-3 text-sm font-bold sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            To Date:
          </label>
          <input
            type="date"
            name="to_date"
            value={formData.to_date}
            onChange={handleInputChange}
            pattern="\d{4}-\d{2}-\d{2}"
            placeholder="YYYY-MM-DD"
            className="  rounded-lg border-2 border-solid border-theme bg-transparent font-bold  text-black sm:text-base md:text-lg lg:text-xl xl:text-2xl"
          />
        </div>

        <div className="flex">
          <label className="text-sm font-bold sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            Class Timing:
          </label>
          <div className="time-input">
            <input
              type="time"
              name="class_timing_from"
              value={formData.times[0]}
              onChange={handleInputChange}
              className="  rounded-lg border-2 border-solid border-theme bg-transparent text-sm font-bold  text-black sm:text-base md:text-lg lg:text-xl xl:text-2xl"
            />
            <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
              to
            </span>
            <input
              type="time"
              name="class_timing_to"
              value={formData.times[1]}
              onChange={handleInputChange}
              className="  rounded-lg border-2 border-solid border-theme bg-transparent text-sm font-bold  text-black sm:text-base md:text-lg lg:text-xl xl:text-2xl"
            />
          </div>
        </div>

        <label className="text-sm font-bold sm:text-base md:text-lg lg:text-xl xl:text-2xl">
          Class Link:
          <input
            type="text"
            name="class_link"
            value={formData.class_link}
            onChange={handleInputChange}
            className="rounded-lg  border-2 border-solid border-theme bg-transparent text-sm font-bold text-black sm:text-base md:text-lg lg:text-xl xl:text-2xl"
          />
        </label>
        <label className="mr-1 text-sm font-bold sm:text-base md:text-lg lg:text-xl xl:text-2xl">
          Limit Maximum Student:
          <input
            type="checkbox"
            name="is_unlimited_student_limit"
            checked={isUnlimited}
            onChange={(e) => setIsUnlimited(e.target.checked)} // Update state on change
            className="text-sm font-bold sm:text-base md:text-lg lg:text-xl xl:text-2xl"
          />
        </label>
        {isUnlimited && (
          <label className="flex  space-x-2 text-sm font-bold sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            Maximum Students:
            <input
              type="number"
              name="maximum_students"
              value={formData.maximum_students}
              min={1}
              max={Number.MAX_SAFE_INTEGER}
              onChange={handleInputChange}
              className="rounded-lg  border-2 border-solid border-theme bg-transparent text-sm font-bold text-black sm:text-base md:text-lg lg:text-xl xl:text-2xl"
            />
          </label>
        )}

        <label className="text-sm font-bold sm:text-base md:text-lg lg:text-xl xl:text-2xl">
          Is Sister Only:
          <input
            type="checkbox"
            name="is_sister_only"
            checked={formData.is_sister_only}
            onChange={handleInputChange}
            className="text-sm  font-bold sm:text-base md:text-lg lg:text-xl xl:text-2xl"
          />
        </label>
        <label className="text-sm font-bold sm:text-base md:text-lg lg:text-xl xl:text-2xl">
          Is Exercise Based:
          <input
            type="checkbox"
            name="is_exercised_based"
            checked={formData.is_exercised_based}
            onChange={handleInputChange}
            className="text-sm font-bold sm:text-base md:text-lg lg:text-xl xl:text-2xl"
          />
        </label>
        <label className="text-sm font-bold sm:text-base md:text-lg lg:text-xl xl:text-2xl">
          Language:
          <select
            name="language"
            value={formData.language}
            onChange={handleInputChange}
            className="rounded-lg  border-2 border-solid border-theme bg-transparent text-sm font-bold text-black sm:text-base md:text-lg lg:text-xl xl:text-2xl"
          >
            <option value="0">English</option>
            <option value="1">Urdu</option>
            <option value="2">Indonesian</option>
            <option value="3">Uzbek</option>
          </select>
        </label>

        <label className="text-sm font-bold sm:text-base md:text-lg lg:text-xl xl:text-2xl">
          Write about your circle (100-150 Characters)
          <textarea
            name="about_circle"
            value={formData.about_circle}
            onChange={handleInputChange}
            className="block w-full rounded-lg border-2 border-solid border-theme bg-transparent px-2 text-sm font-bold text-black sm:text-base md:text-lg lg:text-xl xl:text-2xl"
          />
        </label>
        <button
          type="submit"
          className="rounded  border-2  border-theme bg-transparent px-4 py-2 font-semibold text-black hover:border-transparent hover:bg-theme hover:text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditCircle;

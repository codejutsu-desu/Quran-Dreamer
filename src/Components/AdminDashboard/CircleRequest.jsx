import PropTypes from "prop-types";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CircleRequest({ formData, object_pk, id }) {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  console.log(token);
  const {
    category,
    days,
    pre_requisites,

    class_link,
    maximum_students,
    is_sister_only,
    is_exercised_based,
    language,
    owner_name,
    about_circle,
  } = formData;

  const categories = [
    "Nahw Basics",
    "Sarf Basics",
    "Intermediate Nahw",
    "Advance Nahw",
    "Advanced Sarf",
    "Basic Reader",
    "Intermediate Reader",
    "Advanced Reader",
  ];

  const getCategoryText = (value) => {
    const index = parseInt(value, 10);
    return isNaN(index) ? "Not specified" : categories[index];
  };

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

  const handleAccept = async () => {
    try {
      const response = await axios.get(
        `https://fmr4zl8hr6.execute-api.ap-south-1.amazonaws.com/v1/reply_request/admin_request/${id}?action=accept&type=1&object_pk=${object_pk}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
        navigate("/adminDashboardLayout/requests"),
      );

      // Handle the response as needed
      console.log("Response:", response.data);
    } catch (error) {
      // Handle errors
      console.error("Error:", error);
    }
  };

  return (
    <div className="m-2 flex flex-col rounded-xl border-2 border-solid border-theme p-2">
      <div className="my-3 ml-auto mr-auto text-base font-bold sm:text-lg md:text-xl lg:text-3xl xl:text-3xl">
        Study Circle Information
      </div>
      <div className="space-y-2">
        <div className="flex">
          <label className="text-sm font-bold sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            Mentor:{" "}
          </label>
          <span className="ml-2">
            {owner_name === "" ? "Not specified" : owner_name}
          </span>
        </div>
        <div className="flex">
          <label className="text-sm font-bold sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            Category:
          </label>

          <span className="ml-2">{getCategoryText(category)}</span>
        </div>

        <div className="flex">
          <label className="text-sm font-bold sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            Days:
          </label>
          <span className="ml-2">
            {days.length === 0
              ? "Not specified"
              : days.map((index) => daysOfWeek[index]).join(", ")}
          </span>
        </div>

        <div className="flex">
          <label className="text-sm font-bold sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            Pre-requisites:
          </label>
          <span className="ml-2">
            {pre_requisites.length === 0
              ? "Not specified"
              : pre_requisites.map((index) => prerequisites[index]).join(", ")}
          </span>
        </div>

        <div className="flex">
          <label className="text-sm font-bold sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            Class Link:
          </label>
          <span className="ml-2">{class_link || "Not specified"}</span>
        </div>

        <div className="flex">
          <label className="text-sm font-bold sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            Maximum Students:
          </label>
          <span className="ml-2">{maximum_students || "Not specified"}</span>
        </div>

        <div className="flex">
          <label className="text-sm font-bold sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            Is Sister Only:
          </label>
          <span className="ml-2">{is_sister_only ? "Yes" : "No"}</span>
        </div>

        <div className="flex">
          <label className="text-sm font-bold sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            Is Exercise Based:
          </label>
          <span className="ml-2">{is_exercised_based ? "Yes" : "No"}</span>
        </div>

        <div className="flex">
          <label className="text-sm font-bold sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            Language:
          </label>
          <span className="ml-2">
            {language === 0
              ? "English"
              : language === 1
                ? "Urdu"
                : language === 2
                  ? "Indonesian"
                  : language === 3
                    ? "Uzbek"
                    : "Not specified"}
          </span>
        </div>

        <div className="flex">
          <label className="text-sm font-bold sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            About Circle:
          </label>
          <span className="ml-2">{about_circle || "Not specified"}</span>
        </div>
      </div>
      <button
        onClick={handleAccept}
        className="rounded border border-theme bg-transparent px-4 py-2 font-semibold text-black hover:border-transparent hover:bg-theme hover:text-white"
      >
        Accept the circle request
      </button>
    </div>
  );
}

CircleRequest.propTypes = {
  formData: PropTypes.shape({
    category: PropTypes.number.isRequired,
    days: PropTypes.arrayOf(PropTypes.number).isRequired,
    pre_requisites: PropTypes.arrayOf(PropTypes.number).isRequired,
    from_date: PropTypes.string.isRequired,
    to_date: PropTypes.string.isRequired,
    times: PropTypes.arrayOf(PropTypes.string).isRequired,
    class_link: PropTypes.string,
    maximum_students: PropTypes.number,
    is_sister_only: PropTypes.bool.isRequired,
    is_exercised_based: PropTypes.bool.isRequired,
    language: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
    about_circle: PropTypes.string,
    owner_name: PropTypes.string,
  }).isRequired,
  object_pk: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CircleRequest;

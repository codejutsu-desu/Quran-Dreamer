import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { X } from "lucide-react";
import PropTypes from "prop-types";
import axios from "axios";

const categoryNames = {
  0: "Nahw Basics",
  1: "Sarf Basic",
  2: "Intermediate Nahw",
  3: "Advance Nahw",
  4: "Advanced Sarf",
  5: "Basic Reader",
  6: "Intermediate Reader",
  7: "Advanced Reader",
  8: "Advanced Structures",
  9: "EMSA",
  10: "Quran",
};

function extractInitials(name) {
  const words = name.split(" ");
  const initials = words.map((word) => word[0]);
  return initials.join("");
}

function calculateTimePercentage(fromDate, toDate) {
  const from = new Date(fromDate);
  const to = new Date(toDate);
  const today = new Date();

  const totalTime = to - from;
  const timePassed = today - from;

  if (today <= from) {
    return 0;
  } else if (today >= to) {
    return 100;
  }

  return ((timePassed / totalTime) * 100).toFixed(2);
}

function calculateDaysLeft(toDate) {
  const to = new Date(toDate);
  const today = new Date();

  if (today >= to) {
    return "Session Expired";
  }

  const timeDifference = to - today;
  const daysLeft = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  return `${daysLeft} days left`;
}

function MyOwnCircle({ circle }) {
  const {
    id,
    owner_name,
    about_circle,
    category,
    from_date,
    to_date,
    num_joined_users,
  } = circle;

  const categoryName = categoryNames[category];
  const logoInitials = extractInitials(categoryName);
  const percentage = calculateTimePercentage(from_date, to_date);
  const daysLeft = calculateDaysLeft(to_date);

  const handleDelete = () => {
    const token = localStorage.getItem("token");
    axios
      .delete(`http://13.126.8.147/api/quran_dreamers/study_circle/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log("Delete request successful:", response);
        setIsModalOpen(false);
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error deleting circle:", error);
      });
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  let knowMoreLink = null;

  if (daysLeft !== "Session Expired") {
    knowMoreLink = (
      <NavLink to={`/appLayoutStudent/circleInfo/${circle.id}`}>
        <div className="flex h-7 w-[100px] items-center justify-center rounded-lg bg-hoverTheme  px-1 text-sm font-bold text-white">
          Know More
        </div>
      </NavLink>
    );
  }

  return (
    <div className="m-4 flex max-h-[400px] max-w-[300px] flex-col justify-between rounded-lg border-2 border-solid border-theme p-2 ">
      <div className=" relative flex items-center justify-start">
        <div className="mr-3 flex h-10 max-w-[32px] items-center justify-center rounded-lg bg-theme px-2 font-bold text-white">
          {logoInitials}
        </div>
        <div>
          <div className="text-xl font-bold">{categoryName}</div>
          <div className="text-lg font-normal">{owner_name}</div>
        </div>
        <div
          onClick={toggleModal}
          className="absolute right-1 transform cursor-pointer duration-150 hover:scale-125"
        >
          <X color="#ff0000" />
        </div>
      </div>
      {isModalOpen && (
        <div className="absolute left-0 right-0 top-0 z-50  block  h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0">
          <div className="relative max-h-full w-full max-w-2xl p-4">
            <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
              <div className="flex items-center justify-between rounded-t border-b p-4 dark:border-gray-600 md:p-5">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Are you sure that you want to delete the circle?{" "}
                </h3>
                <button
                  type="button"
                  onClick={toggleModal}
                  className="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg
                    className="h-3 w-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="flex items-center rounded-b border-t border-gray-200 p-4 dark:border-gray-600 md:p-5">
                <button
                  onClick={handleDelete}
                  type="button"
                  className="rounded-lg bg-red-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                >
                  Delete{" "}
                </button>
                <button
                  onClick={toggleModal}
                  type="button"
                  className="ms-3 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-red-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                >
                  Go back{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="mt-3">{about_circle}</div>

      <div className="w-full">
        <div className="flex justify-between">
          <div className="p-2 font-bold">{num_joined_users}</div>
          <div className="p-2 text-right font-bold">{percentage}%</div>
        </div>
        <div className="relative h-5 rounded-lg bg-green-100">
          <div
            className="h-full  rounded-lg bg-theme"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>

      <div className="mt-3 flex justify-between">
        {knowMoreLink}
        <div className="flex h-7 w-[100px] items-center justify-center rounded-lg bg-gray-300  px-1 text-xs font-bold text-black">
          {daysLeft}
        </div>
      </div>
    </div>
  );
}

MyOwnCircle.propTypes = {
  circle: PropTypes.object.isRequired,
};

export default MyOwnCircle;

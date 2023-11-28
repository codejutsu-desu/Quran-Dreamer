import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const categoryNames = {
  0: "Nahw Basics",
  1: "Sarf Basic",
  2: "Intermediate Nahw",
  3: "Advance Nahw",
  4: "Advanced Sarf",
  5: "Basic Reader",
  6: "Intermediate Reader",
  7: "Advanced Reader",
};

function extractInitials(name) {
  // Split the name into words
  const words = name.split(" ");
  // Extract the first letter of each word
  const initials = words.map((word) => word[0]);
  // Join the initials to form the logo
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

function JoinedCircle({ circle }) {
  const {
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
    <div className="m-4 flex max-h-[400px] min-h-[200px]  flex-col justify-between rounded-lg border-2 border-solid border-theme p-2 ">
      <div className="flex items-center justify-start">
        <div className="mr-3 flex h-10 max-w-[32px] items-center justify-center rounded-lg bg-hoverTheme px-2 font-bold text-white">
          {logoInitials}
        </div>
        <div>
          <div className="text-xl font-bold">{categoryName}</div>
          <div className="text-lg font-normal">{owner_name}</div>
        </div>
      </div>
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

JoinedCircle.propTypes = {
  circle: PropTypes.object.isRequired,
};

export default JoinedCircle;

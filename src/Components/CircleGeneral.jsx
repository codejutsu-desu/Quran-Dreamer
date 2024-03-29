import PropTypes from "prop-types";
import { DateTime } from "luxon";

function calculateTimeDuration(startTime, endTime) {
  const start = DateTime.fromISO(startTime);
  const end = DateTime.fromISO(endTime);

  const diff = end.diff(start, ["hours", "minutes"]);
  const hours = Math.floor(diff.hours);
  const minutes = Math.round(diff.minutes);

  if (hours === 0) {
    return `${minutes} minute${minutes !== 1 ? "s" : ""}`;
  } else if (minutes === 0) {
    return `${hours} hour${hours !== 1 ? "s" : ""}`;
  } else {
    return `${hours} hour${hours !== 1 ? "s" : ""} ${minutes} minute${
      minutes !== 1 ? "s" : ""
    }`;
  }
}

function getDayName(dayNumber) {
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return dayNames[dayNumber];
}

function convertToUserLocalTime(time, timezone) {
  const start = DateTime.fromISO(time, { zone: "UTC" });
  const localTime = start.setZone(timezone);
  return localTime.toLocaleString(DateTime.TIME_SIMPLE);
}

function CircleGeneral({ circle }) {
  const { from_date, to_date, about_circle, days, times } = circle;
  console.log(times);
  const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  console.log(userTimezone);
  const classDays = Array.isArray(days)
    ? days.map((dayNumber) => getDayName(dayNumber)).join(", ")
    : "N/A";
  const duration =
    Array.isArray(times) && times.length >= 2
      ? calculateTimeDuration(times[0], times[1])
      : "N/A";

  const startTime =
    Array.isArray(times) && times.length > 0
      ? convertToUserLocalTime(times[0], userTimezone)
      : "N/A";

  const endTime =
    Array.isArray(times) && times.length > 1
      ? convertToUserLocalTime(times[1], userTimezone)
      : "N/A";

  return (
    <div>
      <div className="ml-5 mr-5 mt-5">
        <div className="font-bold sm:text-lg md:text-xl lg:text-2xl">
          General Information
        </div>
        <div className="mt-5 flex justify-between text-base sm:text-lg md:text-xl lg:text-2xl ">
          <div>Class Duration</div>
          <div className="text-center text-xs sm:text-sm md:text-lg lg:text-xl ">
            {duration}
          </div>
        </div>
        <div className="mt-5 flex justify-between text-base sm:text-lg md:text-xl lg:text-2xl ">
          <div>Class days</div>
          <div className="text-center text-xs sm:text-sm md:text-lg lg:text-xl ">
            {classDays}
          </div>
        </div>
        <div className="mt-5 flex justify-between text-base sm:text-lg md:text-xl lg:text-2xl ">
          <div>Class length</div>
          <div className="text-center text-xs sm:text-sm md:text-lg lg:text-xl ">
            {from_date} to {to_date}
          </div>
        </div>
        <div className="mt-5 flex justify-between text-base sm:text-lg md:text-xl lg:text-2xl ">
          <div>Class timing</div>
          <div className="text-center text-xs sm:text-sm md:text-lg lg:text-xl ">
            {startTime} to {endTime}, {userTimezone}
          </div>
        </div>
        <div className="mt-5 flex justify-between text-base sm:text-lg md:text-xl lg:text-2xl ">
          <div>About</div>
          <div className="ml-3 text-start text-xs sm:text-sm md:text-base lg:text-xl ">
            {about_circle}
          </div>
        </div>
      </div>
      <div className="ml-5 mt-5 text-base sm:text-lg md:text-xl lg:text-2xl ">
        <div>Prerequisite</div>
        <ul className="list-disc pl-5 text-start text-xs sm:text-sm md:text-lg lg:text-xl">
          <li>This Feature will be available from next version</li>
          <li>This Feature will be available from next version</li>
          <li>This Feature will be available from next version</li>
          <li>This Feature will be available from next version</li>
        </ul>
      </div>
    </div>
  );
}

CircleGeneral.propTypes = {
  circle: PropTypes.object.isRequired,
};

export default CircleGeneral;

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminDashboardNav() {
  const [activeButton, setActiveButton] = useState("My Circles");
  const navigate = useNavigate();

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);

    if (buttonName === "Main") {
      navigate("/adminDashboardLayout/main");
    } else if (buttonName === "Requests") {
      navigate("/adminDashboardLayout/requests");
    } else if (buttonName === "All Admins") {
      navigate("/adminDashboardLayout/adminAll");
    } else if (buttonName === "Groups") {
      navigate("/adminDashboardLayout/adminGroups");
    }
  };

  return (
    <div className="flex items-center justify-start space-x-3 p-2 pl-5 font-sans font-extrabold">
      {/* <img src="/greenHomeIcon.svg" alt="" /> */}
      <button
        className={
          activeButton === "Main" ? "border-b-2 border-solid border-theme" : ""
        }
        onClick={() => handleButtonClick("Main")}
      >
        Main
      </button>
      <button
        className={
          activeButton === "Requests"
            ? "border-b-2 border-solid border-theme"
            : ""
        }
        onClick={() => handleButtonClick("Requests")}
      >
        Requests
      </button>
      <button
        className={
          activeButton === "All Admins"
            ? "border-b-2 border-solid border-theme"
            : ""
        }
        onClick={() => handleButtonClick("All Admins")}
      >
        All Admins
      </button>

      <button
        className={
          activeButton === "Groups"
            ? "border-b-2 border-solid border-theme"
            : ""
        }
        onClick={() => handleButtonClick("Groups")}
      >
        Groups
      </button>
    </div>
  );
}

export default AdminDashboardNav;

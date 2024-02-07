import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppLayout from "../Pages/AppLayout";
import { loginUser } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);

  const handleJoinClickStudent = () => {
    navigate("/join/2");
  };

  // State to manage form input values
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Handler to update form input values
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Dispatch the loginUser action with the form data
      await dispatch(loginUser(formData));

      // Access user_type from local storage after successful login
      const user_type = localStorage.getItem("user_type");
      const is_experienced = localStorage.getItem("is_experienced");
      console.log(is_experienced);

      // Check if user_type exists
      if (user_type) {
        // Navigate based on user_type
        if (user_type === "2") {
          navigate("/appLayoutStudent");
        } else if (user_type === "1") {
          if (is_experienced === "true") {
            navigate("/dashboardMentorLayout");
          } else {
            toast.error("Wait for verification");
          }
        } else if (user_type === "0") {
          navigate("/adminDashboardLayout");
        }
      } else {
        handleLoginFailure();
      }
    } catch (error) {
      toast.error(error);
      console.log("Error:", error);
    }
  };
  const handleLoginFailure = () => {
    if (error) {
      toast.error(error.response.data.non_field_errors[0]);
    }
  };

  useEffect(() => {
    if (error) {
      handleLoginFailure();
    }
  }, [error]);

  return (
    <AppLayout>
      <Toaster />
      <div className="s mx-2 mt-5 h-screen flex-col justify-between ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-black">
            Login to your account
          </h2>
        </div>

        <div className="mt-10 rounded-lg border-2 border-solid border-theme p-4 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="relative space-y-6 font-sans"
            onSubmit={handleSubmit}
          >
            <div>
              <label
                htmlFor="email"
                className="block p-2 font-sans text-sm font-medium leading-6 text-black"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border-2 border-theme p-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-white placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-hoverTheme sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-black"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="/resetPass"
                    className=" font-semibold text-theme hover:text-hoverTheme"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-2  border-theme p-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-white placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-hoverTheme sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-theme px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-hoverTheme focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Log in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-theme">
            Not yet signup?
            <a
              onClick={handleJoinClickStudent}
              className="cursor-pointer font-semibold leading-6 text-theme hover:text-hoverTheme"
            >
              Join us
            </a>
          </p>
        </div>
      </div>
    </AppLayout>
  );
};

export default Login;

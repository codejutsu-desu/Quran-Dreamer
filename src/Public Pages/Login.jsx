import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../auth";
import { useNavigate } from "react-router-dom";
import AppLayout from "../Pages/AppLayout";
// import Spinner from "../ui/Spinner";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const response = useSelector((state) => state.auth);
  const handleJoinClickStudent = () => {
    navigate("./join/2");
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

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Dispatch the loginUser action
    dispatch(loginUser(formData));
  };

  useEffect(() => {
    // Handle redirection and local storage update when the loginSuccess action is dispatched
    if (response.isAuthenticated) {
      localStorage.setItem("token", response.token);
      localStorage.setItem("user", response.name);
      localStorage.setItem("user_type", response.user_type);

      if (response.user_type === 2) {
        navigate("/appLayoutStudent");
      } else if (response.user_type === 1) {
        navigate("/appLayoutMentor");
      } else if (response.user_type === 0) {
        navigate("/adminDashboardLayout");
      } else {
        alert("Invalid user type");
      }
    } else if (response.error) {
      alert("Login failed. Please check your credentials.");
    }
  }, [response, navigate]);

  return (
    <AppLayout>
      <div className="flex min-h-full flex-1 flex-col justify-center pb-10  font-sans ">
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
            {/* {response.isLoading && (
              <Spinner className="z-999 absolute left-1/2 top-1/2 flex  transform items-center justify-center" />
            )} */}
            <div>
              <label
                htmlFor="email"
                className="block font-sans text-sm font-medium leading-6 text-black"
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
                  className="focus:ring-hoverTheme block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-white placeholder:text-white focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
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
                    href="#"
                    className="hover:text-hoverTheme font-semibold text-theme"
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
                  className="focus:ring-hoverTheme block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-white placeholder:text-white focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="hover:bg-hoverTheme flex w-full justify-center rounded-md bg-theme px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Log in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-theme">
            Not yet signup?
            <a
              onClick={handleJoinClickStudent}
              className="hover:text-hoverTheme font-semibold leading-6 text-theme"
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

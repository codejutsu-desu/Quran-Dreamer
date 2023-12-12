import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom"; // Make sure to use React Router for navigation
import axios from "axios";

function PasswordReset() {
  const Navigate = useNavigate();
  const { resetToken } = useParams();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleResetPassword = async () => {
    try {
      // Make Axios POST request to reset password
      const response = await axios.post(
        "http://13.126.8.147/api/quran_dreamers/password/reset/confirm/",
        {
          userId,
          resetToken,
          password,
          confirmPassword,
        },
      );

      // Handle the response as needed
      console.log("Password Reset Response:", response.data);

      // Redirect to login page or any other page after successful password reset
      Navigate("/login");
    } catch (error) {
      // Handle errors
      console.error("Error resetting password:", error);

      // Display error message to the user
      setError("Password reset failed. Please try again.");
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center pb-10 font-sans">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-black">
          Reset Your Password
        </h2>
      </div>

      <div className="mt-10 rounded-lg border-2 border-solid border-theme p-4 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="relative space-y-6 font-sans">
          <div>
            <label
              htmlFor="password"
              className="block font-sans text-sm font-medium leading-6 text-black"
            >
              New Password
            </label>
            <div className="mt-2">
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-white placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-hoverTheme sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block font-sans text-sm font-medium leading-6 text-black"
            >
              Confirm Password
            </label>
            <div className="mt-2">
              <input
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-white placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-hoverTheme sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="button"
              onClick={handleResetPassword}
              className="flex w-full justify-center rounded-md bg-theme px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-hoverTheme focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Reset Password
            </button>
          </div>
        </form>

        {error && (
          <p className="mt-4 text-center text-sm text-red-500">{error}</p>
        )}
      </div>
    </div>
  );
}

export default PasswordReset;

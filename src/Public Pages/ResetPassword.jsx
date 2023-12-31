import { useState } from "react";
import AppLayout from "../Pages/AppLayout";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

function ResetPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://13.126.8.147/api/quran_dreamers/password/reset/",
        {
          email: email,
        },
      );

      toast.success("Check your email", {
        position: "top-center",
        hideProgressBar: true,
        autoClose: 3000,
      });
      console.log("Reset Password Response:", response.data);
    } catch (error) {
      toast.error("Error while sending request ", {
        position: "top-center",
        hideProgressBar: true,
        autoClose: 3000,
      });
    }
  };

  return (
    <AppLayout>
      <Toaster />
      <div className="flex min-h-full flex-1 flex-col justify-center pb-10  font-sans ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-black">
            Reset your password
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
                className="block font-sans text-sm font-medium leading-6 text-black"
              >
                Enter your Email
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="block w-full  rounded-md border-2 border-theme py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-white placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-hoverTheme sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-theme px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-hoverTheme focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Reset
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-theme">
            Remember password?
            <a
              href="/login"
              className="cursor-pointer font-semibold leading-6 text-theme hover:text-hoverTheme"
            >
              Log In
            </a>
          </p>
        </div>
      </div>
    </AppLayout>
  );
}

export default ResetPassword;

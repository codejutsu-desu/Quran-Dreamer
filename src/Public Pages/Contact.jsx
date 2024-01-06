import axios from "axios";
import AppLayout from "../Pages/AppLayout";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const authToken = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      };

      const response = await axios.post(
        "https://fmr4zl8hr6.execute-api.ap-south-1.amazonaws.com/v1/contact/",
        formData,
        { headers },
      );

      toast.success("Sent your message", {
        duration: 2000,
        position: "top-center",
        onClose: () => {
          navigate("/");
        },
      });

      console.log(response.data);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast.error("Error sending the message");
      console.error(error);
    }
  };

  return (
    <AppLayout>
      <Toaster />
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px]">
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label
                htmlFor="name"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                onChange={handleChange}
                value={formData.name}
                placeholder="Full Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-theme focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Email Address
              </label>
              <input
                type="email"
                onChange={handleChange}
                name="email"
                value={formData.email}
                id="email"
                placeholder="example@domain.com"
                className="w-full rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-theme focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="subject"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Subject
              </label>
              <input
                type="text"
                onChange={handleChange}
                name="subject"
                value={formData.subject}
                id="subject"
                placeholder="Enter your subject"
                className="w-full rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-theme focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="message"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Message
              </label>
              <textarea
                rows="4"
                name="message"
                id="message"
                onChange={handleChange}
                value={formData.message}
                placeholder="Type your message"
                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-theme focus:shadow-md"
              ></textarea>
            </div>
            <div>
              <button className="rounded border border-theme bg-transparent px-4 py-2 font-semibold text-black hover:border-transparent hover:bg-theme hover:text-white">
                Submit{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </AppLayout>
  );
}

export default Contact;

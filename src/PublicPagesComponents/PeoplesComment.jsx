import UserIcon from "../Icons/UserIcon";
function PeoplesComment() {
  return (
    <div className="relative  w-full max-w-[26rem] shrink flex-col rounded-xl border-2 border-solid border-theme bg-transparent bg-clip-border pl-2 pr-2 text-black shadow-none">
      <div className="relative mx-0 mt-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pb-3 pt-0 shadow-none">
        <UserIcon
          alt="DreamUser"
          className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
        />
        <div className="flex w-full flex-col gap-0.5">
          <div className="flex items-center justify-between">
            <h5 className="block font-sans text-xl font-bold leading-snug tracking-normal text-black antialiased">
              Sister Noorjahan
            </h5>
            <div className="5 flex items-center gap-0">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5 text-yellow-700"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              ))}
            </div>
          </div>
          <p className=" block font-sans text-base leading-relaxed text-black antialiased">
            Mentor @ Quran Dreamers
          </p>
        </div>
      </div>
      <div className="mb-6 p-0">
        <p className="block text-justify font-sans text-xs font-normal  text-inherit antialiased lg:text-xl">
          I am delighted to be a part of this groundbreaking Quranic Arabic
          learning website, which unites mentors, teachers, and students from
          across the globe. What truly distinguishes this website is its
          inclusive approach, catering to individuals of all Arabic language
          proficiency levels, making the Quran accessible to everyone. I
          wholeheartedly recommend it to those looking to enhance their Quranic
          Arabic skills and deepen their faith.
        </p>
      </div>
    </div>
  );
}

export default PeoplesComment;

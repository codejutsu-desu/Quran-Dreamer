import UserIcon from "../Icons/UserIcon";
function PeoplesComment() {
  return (
    <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl border-2 border-solid border-theme bg-transparent bg-clip-border pl-2 pr-2 text-black shadow-none">
      <div className="relative mx-0 mt-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pb-3 pt-0 shadow-none">
        <UserIcon
          alt="DreamUser"
          className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
        />
        <div className="flex w-full flex-col gap-0.5">
          <div className="flex items-center justify-between">
            <h5 className="block font-sans text-xl font-bold leading-snug tracking-normal text-black antialiased">
              Sister Lakshmi
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
          <p className="font- text-normal block font-sans leading-relaxed text-black antialiased">
            Mentor @ Quran Dreamers
          </p>
        </div>
      </div>
      <div className="mb-6 p-0">
        <p className="block text-justify font-sans text-sm font-light leading-relaxed text-inherit antialiased lg:text-xl">
          I am thrilled to be part of this innovative Quranic Arabic learning
          platform that brings together mentors, teachers, and students from all
          around the world. What sets this platform apart is its inclusivity. It
          welcomes individuals with varying levels of Arabic language knowledge,
          making the Quran accessible to all. I am confident that this website
          will evolve into a vibrant and supportive Quranic Arabic learning
          community, nurturing a deeper understanding of the Quran for people of
          all backgrounds.
        </p>
      </div>
    </div>
  );
}

export default PeoplesComment;

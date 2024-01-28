import { NavLink } from "react-router-dom";

function Bottombar() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text  bottom-0 flex h-20 w-full items-center  justify-between border-t border-solid border-gray-300 bg-theme  p-2 font-bold text-white">
      <NavLink to="/" className=" h-full w-[70px]  ">
        <img
          src="/logo.png"
          alt=""
          className="h-full cursor-pointer rounded-lg  object-fill transition-all  hover:scale-110 "
        />
      </NavLink>

      <div className="h-full">
        <p className="text-center">Reach us</p>
        <span className="flex space-x-2">
          <a
            href="https://instagram.com/quran.dreamers?igshid=NGVhN2U2NjQ0Yg=="
            target="_blank"
            rel="noreferrer"
            className="h-full w-10"
          >
            <img
              src="/insta.svg"
              alt="Instagram"
              className="h-full w-full object-fill "
            />
          </a>
          <a
            href="https://www.youtube.com/@QuranDreamers/featured"
            target="_blank"
            rel="noreferrer"
            className="h-full w-10 "
          >
            <img
              src="/ytIcon.svg"
              alt="YouTube"
              className="h-full w-full object-fill"
            />
          </a>
        </span>
      </div>
      <div className="flex space-x-2 text-xs md:text-sm lg:text-base xl:text-lg">
        <p>
          Terms of Use |
          <a
            href="https://s3.ap-south-1.amazonaws.com/www.qurandreamers.com/QdPP+ver.3.pdf"
            target="blank"
          >
            Privacy Policy
          </a>
          <br />
          Copyright @ {currentYear} QuranDreamers
        </p>
      </div>
    </footer>
  );
}

export default Bottombar;

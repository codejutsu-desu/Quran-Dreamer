function Bottombar() {
  return (
    <footer className="text bg-theme flex h-20  items-center justify-between border-t border-solid border-gray-300  p-2 font-bold text-white">
      <div className="h-full w-20 ">
        <img
          src="/logo.png"
          alt=""
          className="h-full w-full cursor-pointer rounded-2xl object-cover"
        />
      </div>

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
              src="/Instagram Icon.svg"
              alt="Instagram"
              className="h-full w-full "
            />
          </a>
          <a
            href="https://www.youtube.com/@QuranDreamers/featured"
            target="_blank"
            rel="noreferrer"
            className="h-full w-10 object-cover"
          >
            <img
              src="/youtubeicon.svg"
              alt="YouTube"
              className="h-full w-full"
            />
          </a>
        </span>
      </div>
      <div className="flex space-x-2">
        <p>
          Terms of Use |
          <a
            href="https://s3.ap-south-1.amazonaws.com/www.qurandreamers.com/QdPP+ver.3.pdf"
            target="blank"
          >
            Privacy Policy
          </a>
          <br />
          Copyright @ 2023 QuranDreamers
        </p>
      </div>
    </footer>
  );
}

export default Bottombar;

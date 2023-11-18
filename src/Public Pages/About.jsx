import AppLayout from "../Pages/AppLayout";

function About() {
  return (
    <AppLayout>
      <div className="flex flex-col items-center space-y-2 pl-3 pr-3">
        <p className=" md xl text-center  text-lg font-extrabold text-theme md:text-2xl xl:text-3xl ">
          Understand the Quran, Conquer the World! <br />
        </p>
        <p className="text-center text-base md:text-lg xl:text-2xl ">
          <span className="font-bold">Our Vision</span> is to provide a global
          platform that serves as a central hub of information for Bayyinah
          students, particularly the Dreamers. This platform will support their
          Arabic journey, enhance their skills, and facilitate the spread of
          knowledge and spirit of the Quran to the Muslim communities world
          wide.
        </p>
      </div>

      {/* Embed the YouTube video here */}

      <div className="mt-4 h-auto md:h-[400px] lg:h-[500px] xl:h-[600px]">
        <iframe
          className="ml-auto mr-auto h-full w-2/3  pt-3"
          src="https://www.youtube.com/embed/Spm3QqF6_q8"
          title="YouTube video player"
          // eslint-disable-next-line react/no-unknown-property
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; fullscreen; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      <div className="my-2 ml-auto  mr-auto flex w-3/4 flex-col items-center justify-around rounded-lg border-2 border-solid border-theme p-4">
        <div className="text-center text-2xl font-extrabold text-theme md:text-3xl xl:text-4xl">
          {" "}
          Our Community
        </div>

        <div
          dir="rtl"
          className=" text-center text-xl	font-bold md:text-2xl xl:text-3xl"
        >
          إِنَّا جَعَلْنَـٰهُ قُرْءَٰنًا عَرَبِيًّا لَّعَلَّكُمْ تَعْقِلُونَ
        </div>
        <div className="text-center text-xl	font-bold italic md:text-2xl xl:text-3xl">
          We have caused it to be a discourse in the Arabic tongue, so that you
          might encompass it with your reason- Quran
        </div>

        <div className="mt-4 text-center text-base md:text-xl xl:text-2xl">
          We are the students of Ustadh{" "}
          <a
            className="italic text-link"
            href="https://www.facebook.com/noumanbayyinah/"
          >
            Nouman Ali Khan{" "}
          </a>
          of the{" "}
          <a className="italic text-link" href="https://www.bayyinahtv.com/">
            Bayyinah Institute{" "}
          </a>
          who teaches Quranic Arabic in the{" "}
          <a className="italic text-link" href="https://dream.bayyinahtv.com/">
            Dream Program.{" "}
          </a>
          We have come together to create a platform for fellow students to
          benefit from a larger group of Dreamers. We have student teachers (we
          call Mentors) who lead classes, teachers aide and fellow students who
          help each other in the course of navigating the Dream Program. Please
          go to Bayyinah TV website for the official full course.
        </div>
      </div>
    </AppLayout>
  );
}

export default About;

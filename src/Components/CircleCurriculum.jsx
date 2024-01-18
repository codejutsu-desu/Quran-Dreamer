import PropTypes from "prop-types";
import curriculum from "../Files/curriculum.json";

function CircleCurriculum({ circle }) {
  const { category } = circle;

  let curriculumData;

  if (category === 0) {
    curriculumData = curriculum["Basic Nahw"];
  } else if (category === 1) {
    curriculumData = curriculum["Intermediate Nahw Topics"];
  } else if (category === 2) {
    curriculumData = curriculum["Basic Sarf Topics"];
  } else if (category === 3) {
    curriculumData = curriculum["Advance Sarf Topics"];
  } else if (category === 4) {
    curriculumData = curriculum["Advance Nahw and Advance Structures Topics"];
  } else if (category === 5) {
    curriculumData = curriculum["Basic Reader Topics"];
  } else if (category === 6) {
    curriculumData = curriculum["Intermediate Reader Topics"];
  } else if (category === 7) {
    curriculumData = curriculum["Advance Reader"];
  }

  return (
    <div className="ml-5 mt-5 text-base sm:text-lg md:text-xl lg:text-2xl">
      <div className="font-bold">Curriculum</div>
      {Object.keys(curriculumData).map((key) => {
        const topic = curriculumData[key];
        return (
          <div key={key}>
            <div className="text-theme underline sm:text-sm md:text-lg lg:text-xl ">
              {topic.Title}
            </div>
            {topic.Subtopics && (
              <ul className="sm:text-xs md:text-base lg:text-lg ">
                {topic.Subtopics.map((subtopic, index) => (
                  <li key={index}>{subtopic.a || subtopic.b || subtopic.c}</li>
                ))}
              </ul>
            )}

            {/* Check if there are nested subtopics and render them */}
            {topic.Subtopics &&
              topic.Subtopics.some((subtopic) => subtopic.Subtopics) &&
              topic.Subtopics.map((subtopic, index) => (
                <div key={index}>
                  <div className="font-bold">{subtopic.Title}</div>
                  {subtopic.Subtopics && (
                    <ul className="sm:text-xs md:text-base lg:text-lg ">
                      {subtopic.Subtopics.map((nestedSubtopic, nIndex) => (
                        <li key={nIndex}>
                          {nestedSubtopic.a ||
                            nestedSubtopic.b ||
                            nestedSubtopic.c}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
          </div>
        );
      })}
    </div>
  );
}

CircleCurriculum.propTypes = {
  circle: PropTypes.object.isRequired,
};

export default CircleCurriculum;

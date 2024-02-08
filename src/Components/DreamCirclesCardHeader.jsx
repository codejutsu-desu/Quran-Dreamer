import PropTypes from "prop-types";

function DreamCirclesCardHeader({
  selectedLanguage,
  selectedGender,
  onLanguageChange,
  onGenderChange,
  filteredCircles,
}) {
  const handleLanguageChange = (e) => {
    onLanguageChange(e.target.value);
  };

  const handleGenderChange = (e) => {
    onGenderChange(e.target.value);
  };

  return (
    <div className="flex max-w-[100%] justify-between px-4 pt-2 ">
      <div className="">
        <div className="text-xs font-bold md:text-base lg:text-xl ">
          Dream Circles
        </div>
        <div className="text-xs font-normal md:text-base lg:text-xl  ">
          There are only {filteredCircles.length} dream circles available
        </div>
      </div>
      <div className="flex space-x-2">
        <div className="">
          <label className="text-xs md:text-sm lg:text-base xl:text-xl">
            Language
          </label>
          <select
            id="language"
            className="rounded-lg border-2 border-solid border-black p-1 text-xs text-theme md:text-base lg:text-xl"
            value={selectedLanguage}
            onChange={handleLanguageChange}
          >
            <option value="4">All Languages</option>
            <option value="0">English</option>
            <option value="1">Urdu</option>
            <option value="2">Indonesian</option>
            <option value="3">Uzbek</option>
          </select>
        </div>
        <div className="">
          <label className="text-xs md:text-sm lg:text-base xl:text-xl">
            Gender
          </label>
          <select
            id="gender"
            className="rounded-lg border-2 border-solid border-black p-1 text-xs text-theme md:text-lg lg:text-xl xl:text-2xl"
            value={selectedGender}
            onChange={handleGenderChange}
          >
            <option value="2">Both</option>
            <option value="1">Sisters only</option>
          </select>
        </div>
      </div>
    </div>
  );
}

DreamCirclesCardHeader.propTypes = {
  selectedLanguage: PropTypes.number.isRequired,
  selectedGender: PropTypes.number.isRequired,
  filteredCircles: PropTypes.array.isRequired,
  onLanguageChange: PropTypes.func.isRequired,
  onGenderChange: PropTypes.func.isRequired,
};

export default DreamCirclesCardHeader;

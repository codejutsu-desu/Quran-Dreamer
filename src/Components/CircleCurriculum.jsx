import PropTypes from "prop-types";
import styles from "./CircleCurriculum.module.css";

function CircleCurriculum({ circle }) {
  const { category } = circle;

  const renderCategoryItems = () => {
    switch (category) {
      case 0:
        return (
          <>
            <li>Introduction</li>
            <li>4 Properties</li>
            <li>Pronouns</li>
            <li>Fragments</li>
            <li>Jumlah Ismiyyah</li>
          </>
        );
      case 1:
        return (
          <>
            <li>Jumlah Ismiyya</li>
            <li>Jumlah Filiyya</li>
            <li>Passive Negation</li>
            <li>Kaana and her sisters</li>
            <li>Compound Ism</li>
            <li>Huroof Basics</li>
          </>
        );
      case 2:
        return (
          <>
            <li>Introduction to Sarf</li>
            <li>ثلاثي مزيد فيه Families (II - X)</li>
            <li>ثلاثي مجرد Families (ن ض ف س ح ك)</li>
            <li>Differentiating between clans</li>
            <li>Other صيغ that look the same across families</li>
          </>
        );
      case 3:
        return (
          <>
            <li>The irregularities in SARF, Classification</li>
            <li>The Mahmuz</li>
            <li>The Misaal</li>
            <li>The Mudaaf</li>
            <li>The Ajwaaf</li>
            <li>The Naqis</li>
            <li>The Lafeef</li>
            <li>Rubaee (4 root letters)</li>
            <li>Uses for SARF Words</li>
            <li>The Plural Patterns</li>
          </>
        );
      case 4:
        return (
          <>
            <li>Ism mawsool wa silatuhu</li>
            <li>المتعدِّي بحرف</li>
          </>
        );
      case 5:
        return (
          <>
            <li>You, I</li>
          </>
        );
      case 6:
        return (
          <>
            <li>Chapter 21</li>
          </>
        );
      case 7:
        return (
          <>
            <li>Up to date</li>
          </>
        );
      default:
        return <li>No curriculum available for this category</li>;
    }
  };

  return (
    <div className={styles.prerequisite}>
      <h2>Curriculum</h2>
      <ul className={styles.prerequisiteUl}>{renderCategoryItems()}</ul>
    </div>
  );
}

CircleCurriculum.propTypes = {
  circle: PropTypes.object.isRequired,
};

export default CircleCurriculum;

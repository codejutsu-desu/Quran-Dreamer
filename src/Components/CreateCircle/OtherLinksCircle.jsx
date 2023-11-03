// import { useState } from "react";
import styles from "./OtherLinksCircle.module.css";
function OtherLinksCircle() {
  //   const [formData, setFormData] = useState({
  //     class_link: "",
  //     discussion_link: "",
  //   });

  return (
    <div className={styles.mainContainer}>
      <form>
        <label>
          Provide a link for your classes in this circle:
          <input
            type="text"
            name="class_link"
            // value={formData.class_link}
            // onChange={handleInputChange}
            className={styles.inputField}
          />
        </label>

        <label>
          Provide a link for a discussion forum like WhatsApp group if any
          (*optional):
          <input
            type="text"
            name="discussion_link"
            // value={formData.discussion_link}
            // onChange={handleInputChange}
            className={styles.inputField}
          />
        </label>

        <button type="submit">Create Circle</button>
      </form>
    </div>
  );
}

export default OtherLinksCircle;

import PropTypes from "prop-types";

function MentorRequest({ mentorResponse, object_pk, id }) {
  return (
    <div>
      <div>{(mentorResponse, object_pk, id)}</div>
    </div>
  );
}

export default MentorRequest;

MentorRequest.propTypes = {
  id: PropTypes.number.isRequired,
  object_pk: PropTypes.number.isRequired,
  mentorResponse: PropTypes.object.isRequired,
};

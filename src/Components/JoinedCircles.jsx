import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJoinedCircle } from "../actions";
import JoinedCircle from "./JoinedCircle";

function JoinedCircles() {
  const dispatch = useDispatch();
  const circleData = useSelector((state) => state.joinedCircles);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(fetchJoinedCircle(token));
    }
  }, [dispatch]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {circleData.map((circle) => (
        <JoinedCircle key={circle.id} circle={circle} />
      ))}
    </div>
  );
}

export default JoinedCircles;

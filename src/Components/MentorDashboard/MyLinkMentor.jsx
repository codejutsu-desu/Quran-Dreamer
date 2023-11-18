import CircleClass from "../CircleClass";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJoinedCircle } from "../../actions";

function MyLinkMentor() {
  const dispatch = useDispatch();
  const circleData = useSelector((state) => state.joinedCircles);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(fetchJoinedCircle(token));
    }
  }, [dispatch]);
  return (
    <div className="ml-auto mr-auto max-w-full rounded-xl border-2 border-solid border-theme">
      <div className=" flex justify-center border-b-2 border-theme py-4 font-sans text-2xl font-bold text-black">
        You Class links are listed here
      </div>
      {circleData.map((circle) => (
        <CircleClass circle={circle} key={circle.id} />
      ))}
    </div>
  );
}

export default MyLinkMentor;

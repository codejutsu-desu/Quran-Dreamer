import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Events from "./Pages/Events";
import Login from "./Pages/Login";
import PageNotFound from "./Pages/PageNotFound";
import Notes from "./Pages/Notes";
import StudentsNoteFiles from "./Pages/StudentsNoteFiles";
import Signup from "./Pages/Signup";
import DreamCirclesList from "./Pages/DreamCirclesList";
import CircleInfo from "./Components/CircleInfo";
import StudyCircleForm from "./Components/CreateCircle/CreateCircle";
import InsideCircle from "./Components/InsideCircle/InsideCircle";
// import DashboardStudent from "./Pages/DashboardStudent";
import AdminDashboard from "./Pages/AdminDashboard";
// import DashboardClasses from "./Pages/DashboardClasses";

import FinalCreateCircle from "./Components/CreateCircle/FinalCreateCircle";
import AppLayoutMentor from "./Components/MentorDashboard/AppLayoutMentor";
import ProvideLink from "./Components/MentorDashboard/ProvideLink";
import Pending from "./Components/MentorDashboard/Pending";
import DashboardLayout from "./Components/MentorDashboard/DashboardLayout";
import MyClassesMentor from "./Components/MentorDashboard/MyClassesMentor";
import MyOwnCircles from "./Components/MentorDashboard/MyOwnCircles";
import MyLinkMentor from "./Components/MentorDashboard/MyLinkMentor";
import CreateCircleMentor from "./Components/MentorDashboard/CreateCircleMentor";
import JoinedCircles from "./Components/JoinedCircles";
import MyClasses from "./Components/MyClasses";
import DashboardLayoutStudent from "./Components/StudentDashboard/DashboardLayoutStudent";
import FeatureComingSoon from "./FeatureComing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="notes" element={<Notes />} />
        <Route path="files" element={<StudentsNoteFiles />} />
        <Route path="events" element={<Events />} />
        <Route path="login" element={<Login />} />
        <Route path="join/:user_type" element={<Signup />} />
        <Route path="dreamcircles" element={<DreamCirclesList />} />
        <Route path="circleInfo/:circleId" element={<CircleInfo />} />
        <Route path="insideCircle/:circleId" element={<InsideCircle />} />
        <Route path="adminProfile" element={<StudyCircleForm />} />
        <Route path="dashboardAdmin" element={<AdminDashboard />} />

        {/* Feature Coming */}
        <Route path="notAvailable" element={<FeatureComingSoon />} />

        {/* dashboard for student */}

        <Route path="studentDashboard" element={<DashboardLayoutStudent />}>
          <Route index element={<JoinedCircles />} />
          <Route path="joinedCircles" element={<JoinedCircles />} />
          <Route path="myClasses" element={<MyClasses />} />
        </Route>

        {/* app layout for mentor */}

        <Route path="appLayoutMentor" element={<AppLayoutMentor />}>
          <Route index element={<StudyCircleForm />} />
          <Route path="createCircle" element={<CreateCircleMentor />} />
          <Route path="createCircle2" element={<ProvideLink />} />
          <Route path="approvalPending" element={<Pending />} />
        </Route>

        {/* dashboard for mentor */}

        <Route path="dashboardMentorLayout" element={<DashboardLayout />}>
          <Route index element={<MyClassesMentor />} />
          <Route path="myOwnCircles" element={<MyOwnCircles />} />
          <Route path="myCircles" element={<MyClassesMentor />} />
          <Route path="myLinks" element={<MyLinkMentor />} />
        </Route>

        <Route path="finalCreateCircle" element={<FinalCreateCircle />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

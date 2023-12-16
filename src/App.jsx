import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Public Pages/About";
import Home from "./Public Pages/Home";
import Events from "./Pages/Events";
import Login from "./Public Pages/Login";
import PageNotFound from "./Pages/PageNotFound";
import Notes from "./Pages/Notes";
import StudentsNoteFiles from "./Pages/StudentsNoteFiles";
import Signup from "./Pages/Signup";
import CircleInfo from "./Components/CircleInfo";
import StudyCircleForm from "./Components/CreateCircle/CreateCircle";
import InsideCircle from "./Components/InsideCircle/InsideCircle";

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
import AppLayoutStudent from "./Components/StudentDashboard/AppLayoutStudent";
import DreamCirclesBody from "./Components/StudentDashboard/DreamCirclesBody";
import AdminDashboardLayout from "./Components/AdminDashboard/AdminDashboardLayout";
import AdminMain from "./Components/AdminDashboard/AdminMain";
import AdminRequests from "./Components/AdminDashboard/AdminRequests";
import AdminAll from "./Components/AdminDashboard/AdminAll";
import AdminGroups from "./Components/AdminDashboard/AdminGroups";
import RequestDetail from "./Components/AdminDashboard/RequestDetail";
import ResetPassword from "./Public Pages/ResetPassword";
import PasswordReset from "./Public Pages/PasswordReset";
import MentorExperience from "./Components/MentorDashboard/MentorExperience";
import VideoDemo from "./Components/MentorDashboard/VideoDemo";
import MentorPending from "./Components/MentorDashboard/MentorPending";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* guest routes */}
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />

        {/* login and signup */}

        <Route path="login" element={<Login />} />
        <Route path="resetPass" element={<ResetPassword />} />
        <Route path="newPass/:reset_token" element={<PasswordReset />} />
        <Route path="join/:user_type" element={<Signup />} />
        <Route path="join/mentorExperience" element={<MentorExperience />} />
        <Route path="join/mentorExperience/videoDemo" element={<VideoDemo />} />
        <Route
          path="join/mentorExperience/mentorPending"
          element={<MentorPending />}
        />

        {/* miscellaneous routes */}
        <Route path="notes" element={<Notes />} />
        <Route path="files" element={<StudentsNoteFiles />} />
        <Route path="events" element={<Events />} />

        {/* App Layout for student */}

        <Route path="appLayoutStudent" element={<AppLayoutStudent />}>
          <Route index element={<DreamCirclesBody />} />
          <Route path="circleInfo/:circleId" element={<CircleInfo />} />
          <Route path="insideCircle/:circleId" element={<InsideCircle />} />
        </Route>

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

        {/* Admin Dashboard */}

        <Route path="adminDashboardLayout" element={<AdminDashboardLayout />}>
          <Route index element={<AdminMain />} />
          <Route path="main" element={<AdminMain />} />
          <Route path="requests" element={<AdminRequests />} />
          <Route path="request/:object_pk/:id" element={<RequestDetail />} />
          <Route path="adminAll" element={<AdminAll />} />
          <Route path="adminGroups" element={<AdminGroups />} />
        </Route>

        <Route path="finalCreateCircle" element={<FinalCreateCircle />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

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
import DashboardStudent from "./Pages/DashboardStudent";
import AdminDashboard from "./Pages/AdminDashboard";
import DashboardClasses from "./Pages/DashboardClasses";

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
        <Route path="join" element={<Signup />} />
        <Route path="dreamcircles" element={<DreamCirclesList />} />
        <Route path="circleInfo/:circleId" element={<CircleInfo />} />
        <Route path="insideCircle/:circleId" element={<InsideCircle />} />
        <Route path="studentDashboard" element={<DashboardClasses />} />
        <Route path="createCircle" element={<StudyCircleForm />} />
        <Route path="adminProfile" element={<StudyCircleForm />} />
        <Route path="dashboardStudent" element={<DashboardStudent />} />
        <Route path="dashboardAdmin" element={<AdminDashboard />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

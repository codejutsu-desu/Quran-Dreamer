import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Events from "./Pages/Events";
import Login from "./Pages/Login";
import PageNotFound from "./Pages/PageNotFound";
import Notes from "./Pages/Notes";
import StudentsNoteFiles from "./Pages/StudentsNoteFiles";
import Signup from "./Pages/Signup";

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
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

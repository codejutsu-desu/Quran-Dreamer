import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Events from "./Pages/Events";
import Login from "./Pages/Login";
import Join from "./Pages/Join";
import PageNotFound from "./Pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

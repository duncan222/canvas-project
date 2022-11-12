import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Profile from "./components/profile";
import Calendar from "./components/cal";
import Files from "./components/files";
import Help from "./components/help";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cal" element={<Calendar />} />
          <Route path="/files" element={<Files />} />
          <Route path="/help" element={<Help />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

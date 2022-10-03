import { Route, Routes } from "react-router";
import Login from "./pages/Login";
import Project from "./pages/Project";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/project" element={<Project />} />
    </Routes>
  );
};

export default RoutesComponent;

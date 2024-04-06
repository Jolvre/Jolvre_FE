import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Main from "./pages/Main";
import AboutArt from "./pages/AboutArt";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="/aboutart" element={<AboutArt />} />
      </Route>
    </Routes>
  );
};

export default App;

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Main from "./pages/Main";
import Art from "./pages/Art";
import AboutArt from "./pages/AboutArt";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="/arts/:artist/:name" element={<Art />} />
        <Route path="/arts/:artist/:name/aboutart" element={<AboutArt />} />
      </Route>
    </Routes>
  );
};

export default App;

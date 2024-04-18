import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Main from "./pages/Main";
import PersonalExhibition from "./pages/PersonalExhibition";
import Art from "./pages/Art";
import AboutArt from "./pages/AboutArt";
import Diary from "./pages/Diary";
import PerDiary from "./pages/PerDiary";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="/arts" element={<PersonalExhibition />} />
        <Route path="/arts/:artist/:name" element={<Art />} />
        <Route path="/arts/:artist/:name/aboutart" element={<AboutArt />} />
        <Route path="/arts/:artist/:name/diary" element={<Diary />} />
        <Route path="/arts/:artist/:name/diary/:id" element={<PerDiary />} />
      </Route>
    </Routes>
  );
};

export default App;

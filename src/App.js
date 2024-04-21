import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Main from "./pages/Main";
import GroupExhibition from "./pages/GroupExhibition";
import PerGroup from "./pages/PerGroup";
import PersonalExhibition from "./pages/PersonalExhibition";
import Art from "./pages/Art";
import AboutArt from "./pages/AboutArt";
import Diary from "./pages/Diary";
import PerDiary from "./pages/PerDiary";
import Community from "./pages/Community";
import PerCommunity from "./pages/PerCommunity";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="/groups" element={<GroupExhibition />} />
        <Route path="/groups/:name" element={<PerGroup />} />
        <Route path="/arts" element={<PersonalExhibition />} />
        <Route path="/arts/:artist/:name" element={<Art />} />
        <Route path="/arts/:artist/:name/aboutart" element={<AboutArt />} />
        <Route path="/arts/:artist/:name/diary" element={<Diary />} />
        <Route path="/arts/:artist/:name/diary/:id" element={<PerDiary />} />
        <Route path="/community" element={<Community />} />
        <Route
          path="/community/:artist/:title/:id"
          element={<PerCommunity />}
        />
      </Route>
    </Routes>
  );
};

//
export default App;

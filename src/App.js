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
import Chat from "./pages/Chat";
import Community from "./pages/Community";
import PerCommunity from "./pages/PerCommunity";
import UploadCommunity from "./pages/UploadCommunity";
import FAQ from "./pages/FAQ";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Layout_Mypage from "./Layout_Mypage";
import MyInformation from "./pages/MyInformation";
import MyProject from "./pages/MyProject";
import MyInvitation from "./pages/MyInvitation";
import MyGroup from "./pages/MyGroup";

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
        <Route path="/arts/:artist/:name/:me/chat" element={<Chat />} />
        <Route path="/community" element={<Community />} />
        <Route
          path="/community/:artist/:title/:id"
          element={<PerCommunity />}
        />
        <Route path="/community/upload" element={<UploadCommunity />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>
      <Route element={<Layout_Mypage />}>
        <Route path="/mypage/myinformation" element={<MyInformation />} />
        <Route path="/mypage/myproject" element={<MyProject />} />
        <Route path="/mypage/myinvitation" element={<MyInvitation />} />
        <Route path="/mypage/mygroup" element={<MyGroup />} />
        MyGroup
      </Route>
    </Routes>
  );
};

//
export default App;

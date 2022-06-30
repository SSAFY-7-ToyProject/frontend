import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";

import Header from "./components/Header";
import Login from "./pages/Login";
import MainPage from "./pages/MainPage";
import MyPage from "./pages/MyPage";
import PostListPage from "./pages/PostListPage";
import SignUp from "./pages/SignUp";
import SinglePostPage from "./pages/SinglePostPage";
function App() {
  const [main, SetMain] = useState(false);

  const [appClassName, setAppClassName] = useState("app");
  return (
    <Router>
      <div className={appClassName}>
        {/* {!main && <Header />} */}
        <Routes>
          <Route exact path="/" element={<MainPage setMain={SetMain} />} />
          <Route
            exact
            path="/post"
            element={
              <PostListPage
                userid={"ssafy"}
                setAppClassName={setAppClassName}
              />
            }
          />
          <Route exact path="/post/:post" element={<SinglePostPage />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/mypage" element={<MyPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

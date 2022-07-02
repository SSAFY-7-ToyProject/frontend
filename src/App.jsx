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
  const [headerShow, setHeaderShow] = useState(false);

  const [appClassName, setAppClassName] = useState("app");
  return (
    <Router>
      <div className={appClassName}>
        {headerShow && <Header />}
        <Routes>
          <Route
            exact
            path="/"
            element={<MainPage setHeaderShow={setHeaderShow} />}
          />
          <Route
            exact
            path="/post"
            element={
              <PostListPage
                userid={"ssafy"}
                setAppClassName={setAppClassName}
                setHeaderShow={setHeaderShow}
              />
            }
          />
          <Route
            exact
            path="/post/:post"
            element={<SinglePostPage setHeaderShow={setHeaderShow} />}
          />
          <Route
            exact
            path="/login"
            element={<Login setHeaderShow={setHeaderShow} />}
          />
          <Route
            exact
            path="/signup"
            element={<SignUp setHeaderShow={setHeaderShow} />}
          />
          <Route
            exact
            path="/mypage"
            element={<MyPage setHeaderShow={setHeaderShow} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

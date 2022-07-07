import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { PrivateRoute, privateRoute, PublicRoute } from "./util/CustomRouter";
import Header from "./components/Header";
import Login from "./pages/Login";
import MainPage from "./pages/MainPage";
import MyPage from "./pages/MyPage";
import PostListPage from "./pages/PostListPage";
import NewPost from "./pages/NewPost";
import SignUp from "./pages/SignUp";
import SinglePostPage from "./pages/SinglePostPage";
import MyDiary from "./pages/MyDiary";
import { useSelector } from "react-redux";
import { getUid } from "./store/authSlice.js";
import { selectAllPosts } from "./store/postSlice";
function App() {
  const [appClassName, setAppClassName] = useState("app");
  const userid = useSelector(getUid);

  const isLogined = !!userid;
  // const posts = useSelector(selectAllPosts);
  // console.log(posts);
  return (
    <Router>
      <div className={appClassName}>
        <Header isLogined={isLogined} />
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route
            exact
            path="/mydiary"
            element={
              <PrivateRoute redirect="/login" isLogined={isLogined}>
                <MyDiary userid={userid} setAppClassName={setAppClassName} />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/post"
            element={<PostListPage setAppClassName={setAppClassName} />}
          />
          <Route exact path="/post/:post" element={<SinglePostPage />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route
            exact
            path="/mypage"
            element={
              <PrivateRoute redirect="/login" isLogined={isLogined}>
                <MyPage />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/write"
            element={
              <PrivateRoute redirect="/login" isLogined={isLogined}>
                <NewPost />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

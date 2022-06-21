import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";

import Header from "./components/Header";
import Login from "./pages/Login";
import MyPage from "./pages/MyPage";
import PostListPage from "./pages/PostListPage";
import SignUp from "./pages/SignUp";
import SinglePostPage from "./pages/SinglePostPage";
function App() {
  return (
    <Router>
      <div className="app">
        <Header />

        <Routes>
          <Route exact path="/" element={<PostListPage userid={"ssafy"} />} />
          <Route exact path="/posts/:post" element={<SinglePostPage />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/mypage" element={<MyPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

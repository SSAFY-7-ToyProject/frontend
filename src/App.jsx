import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";

import Header from "./components/Header";
import PostListPage from "./pages/PostListPage";
import SinglePostPage from "./pages/SinglePostPage";
function App() {
  return (
    <Router>
      <div className="app">
        <Header />

        <Routes>
          <Route exact path="/" element={<PostListPage userid={"ssafy"} />} />
          <Route exact path="/:post" element={<SinglePostPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

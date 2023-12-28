import Layout from "./components/common/layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/main";
import Home from "./pages/home";
import MyPage from "./pages/mypage";
import Setting from "./pages/setting";
import Post from "./pages/post";
import Feed from "./pages/feed";
import Login from "./pages/login";
import Register from "./pages/register";
import Detail from "./pages/detail";
import {RecoilRoot} from "recoil";
import Appinfo from "./pages/appinfo";
function App() {
  return (
      <RecoilRoot>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route
                  path='/'
                  element={<Main />}
              />
              <Route
                  path='/home'
                  element={<Home />}
              />
              <Route
                  path='/mypage'
                  element={<MyPage />}
              />
              <Route
                  path='/setting'
                  element={<Setting />}
              />
              <Route
                  path='/post'
                  element={<Post />}
              />
              <Route
                  path='/post/:date'
                  element={<Post />}
              />
              <Route
                  path='/detail'
                  element={<Detail />}
              />
              <Route
                  path='/detail/:postId'
                  element={<Detail />}
              />
              <Route
                  path='/feed'
                  element={<Feed />}
              />
              <Route
                  path='/feed/:date'
                  element={<Feed />}
              />
              <Route
                  path='/login'
                  element={<Login />}
              />
              <Route
                  path='/register'
                  element={<Register />}
              />
              <Route
                  path='/appinfo'
                  element={<Appinfo />}
              />
            </Routes>
          </Layout>
        </BrowserRouter>
      </RecoilRoot>
  );
}

export default App;

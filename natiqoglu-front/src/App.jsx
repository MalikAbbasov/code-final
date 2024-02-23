import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mainlayout from "./layout/Mainlayout";
import Home from "./pages/Home";
import "./assets/reset.scss";
import Error from "./pages/Error";
import "./assets/dark.scss";
import Login from "./pages/Login";
import Register from "./pages/Register";
import News from "./components/News";
import Users from "./components/Users";
import { HelmetProvider } from "react-helmet-async";
import Profile from "./components/Profile";
import NewsUpdate from "./components/NewsUpdate";
import UserUpdate from "./components/UserUpdate";
import Detail from "./pages/Detail";
import PrivateRoute from "./routes/PrivateRoute";
import About from "./pages/About";

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Mainlayout />}>
              <Route element={<PrivateRoute role={["admin"]} />}>
                <Route path="/user" element={<Users />} />
                <Route path="/news" element={<News />} />
              </Route>
              <Route element={<PrivateRoute role={["User", "admin"]} />}>
                <Route path="/newsupdate/:id" element={<NewsUpdate />} />
                <Route path="/userupdate/:id" element={<UserUpdate />} />
              </Route>

              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/about" element={<About />} />
              <Route path="/register" element={<Register />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/detail/:id" element={<Detail />} />
              <Route path="*" element={<Error />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </HelmetProvider>
  );
}

export default App;

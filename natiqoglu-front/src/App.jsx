import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mainlayout from "./layout/Mainlayout";
import Home from "./pages/Home";
import "./assets/reset.scss";
import Error from "./pages/Error";
import "./assets/dark.scss";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Adminpanel from "./pages/Adminpanel";
import News from "./components/News";
import Users from "./components/Users";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainlayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/adminpanel" element={<Adminpanel />} />
            <Route path="/user" element={<Users />} />
            <Route path="/news" element={<News />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    </HelmetProvider>
  );
}

export default App;

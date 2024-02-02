import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mainlayout from "./layout/Mainlayout";
import Home from "./pages/Home";
import "./assets/reset.scss"
import Error from "./pages/Error";
import "./assets/dark.scss"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainlayout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="*" element={<Error/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
import Show from "./pages/show/Show";
import TopBar from "./components/TopBar";
import Menu from "./pages/menu/Menu";
import Contact from "./pages/contact/Contact";
import { useAuthContext } from "./hooks/useAuthContext";
// import Signin from "./components/Signin";
import Login from "./components/login/login";

//styles
import "./App.css";
import Carousel from "./components/carousel/Carousel";

function App() {
  // insert user in useAuthContext()
  // const { authIsReady } = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Home />
                <Menu />
                <Contact />
              </>
            }
          ></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/show/:id" element={<Show />}></Route>
          <Route path="/" element={<Show />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

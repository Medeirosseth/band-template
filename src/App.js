import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "./pages/search/Search";
import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
import Show from "./pages/show/Show";
import TopBar from "./components/TopBar";
import Menu from "./pages/menu/Menu";
import Contact from "./pages/contact/Contact";
import { useAuthContext } from "./hooks/useAuthContext";
import ShowList from "./components/ShowList";

//styles
import "./App.css";
import SignIn from "./components/signin/SignIn";
import Login from "./components/login/login";

function App() {
  const { authIsReady, user } = useAuthContext();

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
              </>
            }
          ></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/show/:id" element={<Show />}></Route>
        </Routes>
      </BrowserRouter>

      <Contact />
      {authIsReady && <Create />}
    </div>
  );
}

export default App;

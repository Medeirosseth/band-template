import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Search from "./pages/search/Search";
import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
import Show from "./pages/show/Show";
import NavBar from "./components/NavBar";
import Menu from "./pages/menu/Menu";
import Contact from "./pages/contact/Contact";
import { useAuthContext } from "./hooks/useAuthContext";

//styles
import "./App.css";
import SignIn from "./components/signin/SignIn";
import Login from "./components/login/login";

function App() {
  const { authIsReady, user } = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
            <Menu />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/show/:id">
            <Show />
          </Route>
        </Switch>
      </BrowserRouter>
      <Contact />
      {authIsReady && <Create />}
    </div>
  );
}

export default App;

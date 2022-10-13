import { BrowserRouter, Switch, Route } from "react-router-dom";
import Search from "./pages/search/Search";
import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
import Show from "./pages/show/Show";
import NavBar from "./components/NavBar";
import Menu from "./pages/menu/Menu";
import Contact from "./pages/contact/Contact";

//styles
import "./App.css";
import SignIn from "./components/signin/SignIn";
import Login from "./components/login/login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
            <Menu />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/show/:id">
            <Show />
          </Route>
        </Switch>
      </BrowserRouter>
      <Login />
      <Contact />
    </div>
  );
}

export default App;

import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import LoginPage from "./pages/Login";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/Register";
import HTMLPage from "./pages/HTML";
import CSSPage from "./pages/CSS";
import JavascriptPage from "./pages/javascript";
import HTMLDOM from "./pages/htmlDOM";
import BROWDOM from "./pages/browserDOM";
import XMLPage from "./pages/xml";
import AjaxPage from "./pages/ajax";
import jQueryPage from "./pages/jQuery";
import jsonPage from "./pages/json";
import reactPage from "./pages/react";
import javaPage from "./pages/java";
import nodePage from "./pages/node";
import jspPage from "./pages/jsp";
import servletPage from "./pages/servlet";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/html" component={HTMLPage} />
        <Route exact path="/css" component={CSSPage} />
        <Route exact path="/htmlDOM" component={HTMLDOM} />
        <Route exact path="/javascript" component={JavascriptPage} />
        <Route exact path="/browDOM" component={BROWDOM} />
        <Route exact path="/xml" component={XMLPage} />
        <Route exact path="/ajax" component={AjaxPage} />
        <Route exact path="/json" component={jsonPage} />
        <Route exact path="/react" component={reactPage} />
        <Route exact path="/java" component={javaPage} />
        <Route exact path="/node" component={nodePage} />
        <Route exact path="/jsp" component={jspPage} />
        <Route exact path="/servlet" component={servletPage} />
        <Route exact path="/jQuery" component={jQueryPage} />
        {/* <Route exact path="/videos/:videoId" component={VideoDetail} />
        <Route exact path="/search/:searchQuery" component={SearchResultPage} />
        <Route exact path="/playlists" component={playlistPage} />
        <Route exact path="/profile" component={profilePage} /> */}
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;

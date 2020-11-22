import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import LoginPage from "./pages/Login";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/Register";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
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

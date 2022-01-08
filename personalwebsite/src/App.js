import "./App.css";
import "./styling/styles.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Links from "./components/links";
import About from "./components/about";
import {
  BrowserRouter as Router,
  Route,
  // withRouter,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <Header />
          <Links />
          <Footer />
        </div>
        <Switch>
          <Route exact path="/about" component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

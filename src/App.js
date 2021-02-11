import './App.css';
import { Switch, Route } from "react-router-dom";
import routes from "./routes";
import Header from "./components/Header";
import Newsletter from "./components/Newsletter"
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Switch>
        {routes.map(route => <Route key={route.path} {...route} />)}
      </Switch>
      {/* <Newsletter />
      <Footer /> */}
    </div>
  );
}

export default App;

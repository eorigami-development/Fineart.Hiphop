import './App.css';
import { Switch, Route } from "react-router-dom";
import routes from "./routes";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        {routes.map(route => <Route key={route.path} {...route} />)}
      </Switch>
    </div>
  );
}

export default App;

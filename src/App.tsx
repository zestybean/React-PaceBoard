import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainMenu from "./MainMenu";
import routes from "./route-config";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container p-4">
          <Switch>
            {routes.map((route) => (
              <Route key={route.path} path={route.path} exact={route.exact}>
                <route.component />
              </Route>
            ))}
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

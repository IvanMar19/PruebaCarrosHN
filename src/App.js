import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LHome from './Components/Layout/Home-Layout';
import LLogin from './Components/Layout/Login-Layout';
import LSignIn from './Components/Layout/SignIn-Layout';
import LNewUser from './Components/Layout/NewUser-Layout';
import LCarros from './Components/Layout/Carros-Layout';
import LOrder from './Components/Layout/FormOrder-Layout';
import LPerfil from './Components/Layout/Perfil-Layout';

function App() {
  return (
    <div className="Main">
      <Router>
        <Switch>
        <Route
            path="/Perfil"
            render={(routeProps) => <LPerfil {...routeProps} />}>
          </Route>
          <Route
            path="/Orden/:id"
            render={(routeProps) => <LOrder {...routeProps} />}>
          </Route>
          <Route
            path="/Vehiculos"
            render={(routeProps) => <LCarros {...routeProps} />}>
          </Route>
          <Route
            path="/NewUser"
            render={(routeProps) => <LNewUser {...routeProps} />}>
          </Route>
          <Route
            path="/Login"
            render={(routeProps) => <LLogin {...routeProps} />}>
          </Route>
          <Route
            path="/SignIn"
            render={(routeProps) => <LSignIn {...routeProps} />}>
          </Route>
          <Route
            path="/"
            render={(routeProps) => <LHome {...routeProps} />}>
          </Route>
        </Switch>
      </Router>

    </div>



  );
}

export default App;

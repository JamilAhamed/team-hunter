import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import NotMatch from './Components/NotMatch/NotMatch';
import TeamDetails from './Components/TeamDetails/TeamDetails';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/home">
          <Home></Home>
          </Route>

          
        <Route path="/details/:id">
         <TeamDetails></TeamDetails>
        </Route>

        <Route exact path="/">
         <Home></Home>
        </Route>

          <Route path="*">
           <NotMatch></NotMatch>
          </Route>
         
        </Switch>
    </Router>
  );
}

export default App;

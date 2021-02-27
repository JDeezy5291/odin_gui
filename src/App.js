import { Route, Router, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Components/Home/Home'
import FormDetails from './Components/Home/FormDetails'

function App() {
  return (
      // <Router>
        <div className="app__overlay">
          {/* <Switch>
            <Route path="/login"> */}
              {/* <Home /> */}
              <FormDetails />
            {/* </Route>
          </Switch> */}
        </div>
      // </Router>
  );
}

export default App;

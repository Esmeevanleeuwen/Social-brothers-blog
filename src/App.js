import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from './Create';
import Navbar from './Navbar';
function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
            <div className='content'>
              <Switch>
                <Route exact path="/" >
                  <Home />
                </Route>
                <Route exact path="/create" >
                  <Create />
                </Route>
              </Switch>
          </div>
      </div>
    </Router>
  );
}

export default App;

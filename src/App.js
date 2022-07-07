import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from './Create';
import Navbar from './Navbar';
import BlogDetails from './BlogDetails';
import AllBlogs from './AllBlogs';
function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
            <div className='content'>
              <Switch>
                <Route exact path="/" >
                  <div>  
                    <Home />
                  </div>
                </Route>
                <Route exact path="/create" >
                  <Create />
                </Route>
                <Route exact path="/blogs/:id"  >
                  <BlogDetails />
                </Route>
                <Route exact path="/Blogs"  >
                  <AllBlogs />
                </Route>
              </Switch>
          </div>
      </div>
    </Router>
  );
}

export default App;

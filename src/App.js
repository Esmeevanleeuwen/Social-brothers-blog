import './App.scss';
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
                        <Route exact path="/" component={Home} />
                        <Route exact path="/create" component={Create} />
                        <Route exact path="/blogs/:id" component={BlogDetails} />
                        <Route exact path="/Blogs" component={AllBlogs} />
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;

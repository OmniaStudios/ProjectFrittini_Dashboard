import { Component } from "react";
import Home from './Pages/Home'
import List from './Pages/List'
import Code from './Pages/Code'
import Broadcast from './Pages/Broadcast'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={() => <Home />} />
                    <Route exact path="/List" component={() => <List />} />
                    <Route exact path="/Code" component={() => <Code />} />
                    <Route exact path="/Broadcast" component={() => <Broadcast />} />
                </Switch>
            </Router>
        )
    }
}

export default App
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './routecomponents/home'
import MobileDesktop from './routecomponents/mobiledesktop'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/mobiledesktop" exact component={() => <MobileDesktop />} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
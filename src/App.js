import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './routecomponents/home'
import MobileDesktop from './routecomponents/mobiledesktop'
import BasesArqui from './routecomponents/basesarqui'
import Web from './routecomponents/web'
import Soporte from './routecomponents/soporte'
import Otros from './routecomponents/others'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ScrollToTop from './efects/scrolltotop'

function App() {
  return (
    <div>
      <Router>
        <ScrollToTop/>
        <Switch>
          <Route path = "/" exact component = {() => <Home />} />
          <Route path = "/mobiledesktop" exact component = {() => <MobileDesktop />} />
          <Route path = "/basesarqui" exact component = {() => <BasesArqui/>} />
          <Route path = "/desarrolloweb" exact component = {() => <Web/>}/>
          <Route path = "/soporte" exact component = {() => <Soporte/>}/>
          <Route path = "/otros" exact component = {() => <Otros/>}/>
        </Switch>
      </Router>
    </div>
  )
}

export default App
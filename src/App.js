import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './routecomponents/home'
import MobileDesktop from './routecomponents/mobiledesktop'
import BasesArqui from './routecomponents/basesarqui'
import Web from './routecomponents/web'
import Soporte from './routecomponents/soporte'
import Otros from './routecomponents/others'

import HomeEn from './routenglishcomponents/home'
import MobileDesktopEn from './routenglishcomponents/mobiledesktop'
import BasesArquiEn from './routenglishcomponents/basesarqui'
import WebEn from './routenglishcomponents/web'
import SoporteEn from './routenglishcomponents/soporte'
import OtrosEn from './routenglishcomponents/others'

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

          <Route path = "/home-en" exact component = {() => <HomeEn/>}/>
          <Route path = "/mobiledesktop-en" exact component = {() => <MobileDesktopEn/>}/>
          <Route path = "/basesarqui-en" exact component = {() => <BasesArquiEn/>}/>
          <Route path = "/desarrolloweb-en" exact component = {() => <WebEn/>}/>
          <Route path = "/soporte-en" exact component = {() => <SoporteEn/>}/>
          <Route path = "/otros-en" exact component = {() => <OtrosEn/>}/>
       
        </Switch>
      </Router>
    </div>
  )
}

export default App
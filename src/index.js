import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Layout from './components/layout'
import Home from './views/home'
import Contact from './views/contact'
import About from './views/about'
import Portfolio from './views/portfolio'
import Services from './views/services'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route component={Home} exact path="/" />
          <Route component={Contact} exact path="/contacto" />
          <Route component={About} exact path="/nosotros" />
          <Route component={Portfolio} exact path="/portafolio" />
          <Route component={Portfolio} exact path="/portafolio/:id" />
          <Route component={Services} exact path="/servicios" />
          <Route component={NotFound} path="**" />
          <Redirect to="**" />
        </Switch>
      </Layout>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))

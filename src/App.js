import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import NavBar from './components/common/NavBar'
import Home from './components/common/Home'
import Projects from './components/content/Projects'
import About from './components/content/About'

function App(){
  return(
    <BrowserRouter>
    <NavBar/>
    <Switch>
      <Route path="/projects" component={Projects}/>
      <Route path="/about" component={About}/>
      <Route exact path="/" component={Home}/>
    </Switch>
    </BrowserRouter>
    )
}

export default App

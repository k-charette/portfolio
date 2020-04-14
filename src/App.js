import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Homepage from './pages/homepage/homepage.component'
import Header from './components/header/header.component'
import About from './components/about/about.component'
import Projects from './components/projects/projects.component'
import { GlobalStyle } from './global-styles'

const App = () => {
  return (
    <>
      <GlobalStyle/>
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route path="/header" component={Header}/>
        <Route path="/about" component={About}/>
        <Route path="/projects" component={Projects}/>
      </Switch>
    </>
  )
}

export default App



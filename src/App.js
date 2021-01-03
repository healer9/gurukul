import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './routes/Home'
import About from './routes/About'
import Admission from './routes/Admission'
import Academics from './routes/Academics'
import Alumni from './routes/Alumni'
import Faculty from './routes/Faculty'
import Contact from './routes/Contact'
import Tour from './routes/Tour'
import Portal from './routes/Portal'
import Gallery from './routes/Gallery'
import News from './routes/News'

const App = () => {
  return (
    <Router>
      <Header />
      {/* main - routes */}
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/admission" component={Admission} />
      <Route path="/academics" component={Academics} />
      {/* minor - routes */}
      <Route path="/alumni" component={Alumni} />
      <Route path="/faculty" component={Faculty} />
      <Route path="/contact" component={Contact} />
      <Route path="/tour" component={Tour} />
      <Route path="/portal" component={Portal} />
      {/* homepage-route */}
      <Route path="/gallery" component={Gallery} />
      <Route path="/news" component={News} />
    </Router>
  )
}

export default App;

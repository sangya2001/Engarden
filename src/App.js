import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import loadable from '@loadable/component'
import "./App.css"

const Home = loadable(() => import('./Pages/Home'))
const About = loadable(() => import('./Pages/About'))
const Shop = loadable(() => import('./Pages/Shop'))
const Contact = loadable(() => import('./Pages/Contact'))
const Blog = loadable(() => import('./Pages/Blog'))

function App() {
  return (
    <div className="engarden">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/shop" component={Shop}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/blog" component={Blog}/>
          <Route exact path="/contact" component={Contact}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

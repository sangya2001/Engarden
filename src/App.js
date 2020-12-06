import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './Pages/Home';
import "./App.css"
import Shop from './Pages/Shop';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';

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

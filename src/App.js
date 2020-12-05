import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './Pages/Home';
import "./App.css"

function App() {
  return (
    <div className="engarden">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          {/* <Route exact path="/" component={Home}/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/" component={Home}/> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

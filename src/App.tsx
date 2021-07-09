import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Home from './pages/Home/Home'
import Counter from './features/Counter/Counter'
import Cat from './features/Cat/Cat'

function App() {
  return (
    <div className="App">
      <Router>
        <div className="content-top">
          <Navbar />
        </div>
        <div className="content-bottom">
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/Counter" component={Counter} />
              <Route path="/Cat" component={Cat} />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;

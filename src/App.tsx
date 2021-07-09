import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Router>
        <div className="content-top">
          <Navbar />
        </div>
        <div className="content-bottom">
          <div className="sidebar">
            Sidebar
          </div>
          <div className="content">
            <div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem voluptates qui ipsam in hic id quibusdam beatae aliquid error, facere iusto similique sunt saepe, laboriosam, esse quaerat cum sed perferendis!
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem voluptates qui ipsam in hic id quibusdam beatae aliquid error, facere iusto similique sunt saepe, laboriosam, esse quaerat cum sed perferendis!
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem voluptates qui ipsam in hic id quibusdam beatae aliquid error, facere iusto similique sunt saepe, laboriosam, esse quaerat cum sed perferendis!
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem voluptates qui ipsam in hic id quibusdam beatae aliquid error, facere iusto similique sunt saepe, laboriosam, esse quaerat cum sed perferendis!
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem voluptates qui ipsam in hic id quibusdam beatae aliquid error, facere iusto similique sunt saepe, laboriosam, esse quaerat cum sed perferendis!
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem voluptates qui ipsam in hic id quibusdam beatae aliquid error, facere iusto similique sunt saepe, laboriosam, esse quaerat cum sed perferendis!
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem voluptates qui ipsam in hic id quibusdam beatae aliquid error, facere iusto similique sunt saepe, laboriosam, esse quaerat cum sed perferendis!
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem voluptates qui ipsam in hic id quibusdam beatae aliquid error, facere iusto similique sunt saepe, laboriosam, esse quaerat cum sed perferendis!
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem voluptates qui ipsam in hic id quibusdam beatae aliquid error, facere iusto similique sunt saepe, laboriosam, esse quaerat cum sed perferendis!
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem voluptates qui ipsam in hic id quibusdam beatae aliquid error, facere iusto similique sunt saepe, laboriosam, esse quaerat cum sed perferendis!
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem voluptates qui ipsam in hic id quibusdam beatae aliquid error, facere iusto similique sunt saepe, laboriosam, esse quaerat cum sed perferendis!
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem voluptates qui ipsam in hic id quibusdam beatae aliquid error, facere iusto similique sunt saepe, laboriosam, esse quaerat cum sed perferendis!
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem voluptates qui ipsam in hic id quibusdam beatae aliquid error, facere iusto similique sunt saepe, laboriosam, esse quaerat cum sed perferendis!
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem voluptates qui ipsam in hic id quibusdam beatae aliquid error, facere iusto similique sunt saepe, laboriosam, esse quaerat cum sed perferendis!
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem voluptates qui ipsam in hic id quibusdam beatae aliquid error, facere iusto similique sunt saepe, laboriosam, esse quaerat cum sed perferendis!
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;

import React, { Component } from 'react'
import './App.css'
import AppHeader from './components/AppHeader'
import Routing from './routes'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        <Routing />
      </div>
    )
  }
}

export default App

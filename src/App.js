import React, { Component } from 'react'
import './resources/styles.scss'
import Header from './components/header/Header'

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: "150rem", backgroundColor: "cornflowerblue" }}>
        <Header />
      </div>
    )
  }
}

export default App

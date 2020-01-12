import React, { Component } from 'react'
import './resources/styles.scss'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: "150rem", backgroundColor: "cornflowerblue" }}>
        <Header />
        <Hero />
      </div>
    )
  }
}

export default App

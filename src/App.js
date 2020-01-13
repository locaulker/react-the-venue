import React, { Component } from "react"
import "./resources/styles.scss"
import { Element } from 'react-scroll'

import Header from "./components/header/Header"
import Hero from "./components/hero/Hero"
import VenuInfo from "./components/venue-info/VenuInfo"
import HighLights from "./components/highlights/HighLights"
import Princing from "./components/pricing/Princing"
import Location from './components/location/Location'
import Footer from "./components/footer/Footer"

class App extends Component {
	render() {
		return (
			<div
				className="App"
				style={{ height: "150rem", backgroundColor: "$mainWhite" }}
			>
				<Header />
				<Element name="hero">
					<Hero />
				</Element>

				<Element name="venuinfo">
					<VenuInfo />
				</Element>

				<Element name="highlights">
					<HighLights />
				</Element>

				<Element name="pricing">
					<Princing />
				</Element>

				<Element name="location">
					<Location />
				</Element>
				<Footer />
			</div>
		)
	}
}

export default App

import React, { Component } from "react"
import Zoom from 'react-reveal/Zoom'
import MyButton from '../utils/MyButton'

class Princing extends Component {
  state = {
    prices: [100, 150, 250],
    seats: ["Balcony", "Medium", "Star"],
    desc: [
      "Nullam quis risus eget urna mollis ornare vel eu leo.",
      "Nullam id dolor id nibh ultricies vehicula ut id elit.",
      "Nullam id dolor id nibh ultricies vehicula ut id elit."
    ],
    linkto: ["http://sales/b", "http://sales/m", "http://sales/s"],
    delay: [500, 0, 800]
  }

  showBoxes = () => (
    this.state.prices.map((box, i) => (

      <Zoom delay={this.state.delay[i]} key={1}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>${this.state.prices[i]}</span>
              <span>{this.state.seats[i]}</span>
            </div>
            <div className="pricing_description">
              <span>{this.state.desc[i]}</span>
            </div>
            <div className="pricing_buttons">
              <MyButton
                text="Purchase"
                bck="#ffa800"
                color="#fff"
                link={this.state.linkto[i]}
              />
            </div>
          </div>
        </div>
      </Zoom>

    ))
  )

  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>
          <div className="pricing_wrapper">
            {this.showBoxes()}
          </div>
        </div>
      </div>
    )
  }
}

export default Princing

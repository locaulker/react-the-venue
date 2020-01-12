import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'

class Discount extends Component {

  state = {
    discountStart: 0,
    discountEnd: 30
  }

  percentage = () => {
    if (this.state.discountStart < this.state.discountEnd) {
      this.setState({
        discountStart: this.state.discountStart + 1
      })
    }
  }

  componentDidUpdate() {
    setTimeout(() => {
      this.percentage()
    }, 50)
  }

  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">

          <Fade
            onReveal={() => this.percentage()}
          >
            <div className="discount_percentage">
              <span>{this.state.discountStart}%</span>
              <span>Off</span>
            </div>
          </Fade>

          <Slide right>
            <div className="discount_description">
              <h3>Get Tickets <small><em>by <strong>June 20th, 2020</strong></em></small></h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, nostrum perspiciatis, inventore officiis laboriosam unde nesciunt distinctio earum consectetur excepturi accusamus numquam odit sint minima repellendus sit omnis neque vero.</p>
              <button>Purchase Now</button>
            </div>
          </Slide>

        </div>
      </div>
    )
  }
}

export default Discount
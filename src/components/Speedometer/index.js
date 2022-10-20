// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  increaseSpeed = () => {
    this.setState(prevState => ({
      speed: prevState.speed < 200 ? prevState.speed + 10 : prevState.speed,
    }))
  }

  decreaseSpeed = () => {
    this.setState(prevState => ({
      speed: prevState.speed > 0 ? prevState.speed - 10 : prevState.speed,
    }))
  }

  render() {
    const {speed} = this.state
    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="image"
        />
        <h1 className="details">
          Speed is {speed}
          mph
        </h1>
        <p className="limit">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="btn-container">
          <button
            className="button btn-1"
            type="button"
            onClick={this.increaseSpeed}
          >
            Accelerate
          </button>
          <button
            className="button btn-2"
            type="button"
            onClick={this.decreaseSpeed}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer

import React from "react"
import Header from "./Header"
import Order from "./Order"
import Inventory from "./Inventory"
import sampleFishes from "../sample-fishes"

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      fishes: {},
      order: {}
    }
  }

  addFish = fish => {
    // copy the state
    const fishes = { ...this.state.fishes }
    // add the new object to the copied variable
    fishes[`fish${Date.now()}`] = fish // we use a timestamp as a unique key
    // set the state
    this.setState({ fishes })
  }

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes })
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order />
        <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} />
      </div>
    )
  }
}

export default App

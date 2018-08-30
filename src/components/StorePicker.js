import React from "react"
import { getFunName } from "../helpers"

class StorePicker extends React.Component {
  myInput = React.createRef()

  goToStore = event => {
    event.preventDefault()
    const storeName = this.myInput.value.value
    // Since StorePicker is a child of th Router component we can access to its methods via props
    // (Check the props in the react console to see more)
    this.props.history.push(`/store/${storeName}`)
  }

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please enter a Store</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store ➡</button>
      </form>
    )
  }
}

export default StorePicker

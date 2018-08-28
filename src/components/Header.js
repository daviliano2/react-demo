import React from "react"

// The syntax below is called implicit return. We ca do this and remove the "{}" and the "return"
// when we are only returning a value or some HTML
const Header = props => (
  <header className="top">
    <h1>
      Catch
      <span className="ofThe">
        <span className="of">Of</span>
        <span className="the">The</span>
      </span>
      Day
    </h1>
    <h3 className="tagline">
      <span>{props.tagline}</span>
    </h3>
  </header>
)

export default Header

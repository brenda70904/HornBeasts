import React from "react";
import "./Header.css"


export default class Header extends React.Component {
  

  

  render() {
    return (
      <>
        <header>
          <nav>
            <h1> Gallery of Horns</h1>
          </nav>
        </header>
        {/* <nav>
        <input type="text" placeholder="Search..." />
        <button onClick={this.props.handleSearch}>Search</button>
      </nav> */}
      </>
    )
  }
}

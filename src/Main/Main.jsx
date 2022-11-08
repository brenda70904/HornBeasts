import React from "react";
import HornBeasts from "../HornBeasts/Hornbeasts";

export default class Main extends React.Component {

  render() {
    return (
      <>
        <HornBeasts
          name="unicorn"
          src = "https://freesvg.org/img/1381160021.png" 
          alt = "this is a unicorn"
          description = "this unicorn ate too much" 
          title= "unicron"
      />
      <HornBeasts
          name="ox"
          src = "https://www.publicdomainpictures.net/pictures/160000/nahled/ox-clipart-illustration.jpg" 
          alt = "this is an ox"
          title= "ox"
          description = "any domesticated bovine animal kept for milk or meat; a cow or bull."
      />
    </>
    )
  }
}

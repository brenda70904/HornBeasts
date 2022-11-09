import React from "react";
import Card from "react-bootstrap/Card";
import "./Hornbeasts.css"
// import Button from "react-bootstrap/Botton";


export default class HornBeasts extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      favCount:0
    }
  }
handleClick = () => {
  this.setState({favCount: this.state.favCount +1});
}

  render() {
    return (
      <>
      <Card className= "beastCard">
        <Card.Img 
          variant="top" 
          src={this.props.image_url} 
          id={this.props.id} 
          alt={this.props.description}/>
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
            <div>{this.props.description}</div>
            <div>Number of Horns:{this.props.horns}</div>
          </Card.Text>
          <button onClick={this.handleClick}> ❤️ : {this.state.favCount} </button>
        </Card.Body>
      </Card>
      </>
    );
  }
}

import React from "react";

export default class HornBeasts extends React.Component {
  render() {
    return (
      <>
        <h2>title: {this.props.name}</h2>
        <img src={this.props.src} alt= {this.props.alt} title={this.props.title}></img>
        <p>{this.props.description}</p>
        </>
    );
  }
}

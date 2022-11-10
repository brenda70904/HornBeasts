import React from "react";
import Modal from 'react-bootstrap/Modal';
import "./SelectBeast.css"

export default class SelectBeast extends React.Component{
  // constructor(props){
  //   super(props);
  //   this.state
  // }
  render(){
    return (
      <Modal 
        show={this.props.isModalshown} 
        className="modalBody"
        onHide={this.props.handleModalClose} 
      >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Title>{this.props.title}</Modal.Title>
      <Modal.Body >
        Description:&nbsp;{this.props.description}
        <br/>
       <img src= {this.props.image_url} alt={this.props.alt} className="beastImage"/>
        <br/>
        Number of horns:{this.props.horns}
      </Modal.Body>

      </Modal>
    )
  }


}

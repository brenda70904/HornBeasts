import React from "react";
import HornBeasts from "../HornBeasts/Hornbeasts";
import Form from "react-bootstrap/Form";
import "./Main.css"



export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredData: this.props.data || [],
    }
  }
  handleChange = (e) => {
    let newData = "";
    console.log('hi')
    console.log(e.target.value);
    if (e.target.value === '1 horn') {
      newData = this.props.data.filter(beastData => beastData.horns === 1)
    } else if (e.target.value === '2 horns') {
      newData = this.props.data.filter(beastData => beastData.horns === 2)
    } else if (e.target.value === '3 horns') {
      newData = this.props.data.filter(beastData => beastData.horns === 3)
    } else if (e.target.value === 'lots of horns') {
      newData = this.props.data.filter(beastData => beastData.horns > 3)
    } else {
      newData = this.props.data;
    }
    this.setState({ filteredData: newData });
  }
  // handleSelect = (e) =>{
  //   this.setState({howToSort: this.target.value})
  // }
  render() {
    return (
    <>
      <Form id = "from">
          <Form.Group controlId="dropdown">
            <Form.Label>
              Filter by number of horns 
              &nbsp;&nbsp;
            </Form.Label>
            <Form.Select id="select" onChange={this.handleChange}>
              <option value="all">All beasts</option>
              <option value="1 horn">1</option>
              <option value="2 horns">2</option>
              <option value="3 horns">3</option>
              <option value="lots of horns">3+</option>
            </Form.Select >
            {/* <button onClick={this.handleSubmitFrom}>Submit</button> */}
          </Form.Group>
      </Form>
      {
        this.state.filteredData.map((beast, idx) =>
          <HornBeasts
            key={idx}
            id={beast._id}
            title={beast.title}
            image_url={beast.image_url}
            description={beast.description}
            keyword={beast.keyword}
            horns={beast.horns}
            handleModalOpen={this.props.handleModalOpen}
            handleModalClose={this.props.handleModalClose}
            isModalshown={this.props.isModalshown}
          />
        )
      }
  </>
  )            
  }
}

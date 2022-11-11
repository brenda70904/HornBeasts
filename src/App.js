import React from "react";
import data from "./data.json";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import SelectBeast from "./Components/SelectBeast/SelectBeast";
import Footer from "./Components/Footer/Footer";
import "./App.css"

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalshown: false,
      title:"",
      description:"",
      horns:"",
      image_url:"",
      alt:"",
      
    }
  }

  handleModalOpen = (title,description,horns,src,alt) => {
    this.setState({ 
      isModalshown: true, 
      title:title,
      description:description,
      horns:horns,
      image_url:src,
      alt:alt
    });
  }

  handleModalClose = () => {
    this.setState({ isModalshown: false });
  }

  // handleSearch = () =>{
  //   return data.map( input => input.filter( ) 

  //   )filter( searchName => searchName.includes())
  // }
  render() {

    return (
      <>
        <Header data={data} />
        {/* handleSearch={this.handleSearch}  // for serch bar */}
        <Main
          data={data}
          isModalshown ={this.state.isModalshown}
          handleModalOpen={this.handleModalOpen}
          handleModalClose={this.handleModalClose}
        />
        <Footer />
        <SelectBeast
          handleModalOpen={this.handleModalOpen}
          handleModalClose={this.handleModalClose} 
          isModalshown ={this.state.isModalshown}
          title={this.state.title}
          horns={this.state.horns}
          image_url={this.state.image_url}
          description={this.state.description}
          />
      </>
    );
  };
};

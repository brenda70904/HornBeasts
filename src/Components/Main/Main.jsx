import React from "react";
import HornBeasts from "../HornBeasts/Hornbeasts";



export default class Main extends React.Component {
  
  render() {
    return (
      <>
        {
        this.props.data.map((beast, idx) =>
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
              isModalshown ={this.props.isModalshown}
            />
          )
        }
      </>
    )
  }
}

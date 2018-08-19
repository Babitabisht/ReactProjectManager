import React, { Component } from "react";
import { ProjectItem } from "./ProjectItem";

export class Projects extends Component {
  render() {
    let projectItems;
    if (this.props.project) {
      projectItems = this.props.project.map(pro => {
        // console.log(pro);
        return (<ProjectItem key={pro.title} project={pro} />);
      });
    }

        return (
          <div className="Projects">
          <h2>Latest Projects</h2>
          {projectItems}
    

          </div>
        );
  }
}

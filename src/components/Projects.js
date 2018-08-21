import React, { Component } from "react";
import { ProjectItem } from "./ProjectItem";
import PropTypes from 'prop-types'


export class Projects extends Component {
  deleteProject(id){
    this.props.onDelete(id);
  }
  render() {
    let projectItems;
    if (this.props.project) {
      projectItems = this.props.project.map(project => {
       
        return (<ProjectItem
          onDelete={this.deleteProject.bind(this)}
          key={project.title} project={project}   />);
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

Projects.propTypes = {
project: PropTypes.array,
onDelete : PropTypes.func

}

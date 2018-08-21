import React, { Component } from 'react';
import PropTypes from 'prop-types'



export class  ProjectItem extends Component {
constructor(props){
  super();
  this.deleteProject=this.deleteProject.bind(this);
}

deleteProject(id){

  console.log('test');
  this.props.onDelete(id);

}

  render() {

   
    return (

<li className="Project">

<strong>{this.props.project.title}</strong>= {this.props.project.category} &nbsp;
<a href='#'  onClick={this.deleteProject.bind(this , this.props.project.id)} >Delete</a>

</li>

    );

  }
}

ProjectItem.propTypes = {
  project: PropTypes.object,
  onDelete : PropTypes.func
  
  }
  

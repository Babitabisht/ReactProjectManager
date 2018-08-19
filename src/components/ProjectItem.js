import React, { Component } from 'react';
   


export class  ProjectItem extends Component {
  render() {

   
    return (
<li className="Project">
<strong>{this.props.project.title}</strong>= {this.props.project.category}
</li>
    );
  }
}


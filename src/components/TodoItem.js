import React, { Component } from 'react';
import PropTypes from 'prop-types'



export class  TodoItem extends Component {
constructor(props){
  super();
  
}


  render() {

   
    return (

<li className="Todo">

<strong>{this.props.todo.title}</strong> &nbsp; <br />
<br />
User Id :
{this.props.todo.userId} &nbsp; <br />
<br />
ToDo Id :   {this.props.todo.id}
<br />
<hr/>
</li>

    );

  }
}

TodoItem.propTypes = {
  todo: PropTypes.object,
  
  }
  

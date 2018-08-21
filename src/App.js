import React, { Component } from 'react';

import './App.css';
import {Projects} from './components/Projects';
import {AddProject} from './components/AddProject' ;
import {default as UUID} from "node-uuid";



class App extends Component {
  constructor(props){
    super(props);
    this.state={
      projects:[
        
      ]
    }

  this.handleAddProject=this.handleAddProject.bind(this);
  this.handleDeleteProject=this.handleDeleteProject.bind(this);

  }

  componentWillMount(){
   
  //console.log(UUID.v4());
  
    this.setState({
      projects:
      
      [{
       id:UUID.v4(),
        title:'Business Website',
      category:'Web Design'
    },
    { id:UUID.v4(),
      title:'Social Website',
    category:'Mobile developmeny'
  },
  { id:UUID.v4(),
    title:'Ecommerce Shopping cart',
  category:'Web Development'
}]
    })
  }

  handleAddProject(project){
   console.log('In delete'+project);

    let projects=this.state.projects;
    projects.push(project);
    this.setState({projects:projects});


  }
  handleDeleteProject(id){
let projects =this.state.projects;
let index =projects.findIndex(x=> x.id === id);
projects.splice(index,1);
this.setState({projects:projects});

  }
  render() {
    return (
      <div className="App">
       
<AddProject addProject={this.handleAddProject.bind(this)}   />

<Projects project={this.state.projects} onDelete={this.handleDeleteProject.bind(this)} />

      </div>
    );
  }
}

export default App;

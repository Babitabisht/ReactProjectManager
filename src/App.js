import React, { Component } from 'react';
import  $  from 'jquery';
import './App.css';
import {Projects} from './components/Projects';
import {AddProject} from './components/AddProject' ;
import {default as UUID} from "node-uuid";
import {Todo} from './components/Todo' ;


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      projects:[
        
      ],
      todos:[]
    }

  this.handleAddProject=this.handleAddProject.bind(this);
  this.handleDeleteProject=this.handleDeleteProject.bind(this);

  }
getTodos(){
$.ajax({

  url:'https://jsonplaceholder.typicode.com/todos' ,
  datatypes:'json' ,
  cache:false,
  success:function(data){

this.setState({todos:data},function(){
  console.log(this.state)
})

  }.bind(this),
  error:function(xhr,status,err){
    console.log(err);
  }


})






}
getProjects(){
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

  componentWillMount(){
   
  //console.log(UUID.v4());
  
   this.getProjects();
    this.getTodos();
console.log($)
  }

  componentDidMount(){
    this.getTodos();


  }

  handleAddProject(project){
   console.log('In Add '+project);

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
<hr />

<Todo  todo={this.state.todos} />




      </div>
    );
  }
}

export default App;

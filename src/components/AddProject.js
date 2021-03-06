import React, { Component } from "react";
import {default as UUID} from "node-uuid";
import PropTypes from 'prop-types'


export class AddProject extends Component {

    constructor(){
        super();
        this.state={
            newProject:{

            }
        }
    }

    static defaultProps ={
        categories : ['Web Design','Web Development','Mobile Development']
    }

    handleSubmit(e){
      if(this.refs.title.value===''){ 

        alert('Title is required');

      }else{

        this.setState({
            newProject:{
                id:UUID.v4(),
                title:this.refs.title.value,
                category:this.refs.category.value

            }
        },()=>{
           // console.log(this.state);
           this.props.addProject(this.state.newProject);

        })
      }
      
        console.log(this.refs.title.value);
        e.preventDefault();
    }

  render() {
    
        let categoryOptions = this.props.categories.map(cat =>{
            return <option key={cat} value={cat} >
            {cat}
            </option>
        })
        return (
          <div >

          <h3>Add Project</h3>
          <form  onSubmit={this.handleSubmit.bind(this)}>
          <div>
          <label>
          Title
          </label> <br /><br />
          <input type="text" 
          ref="title"
          /> 
          </div>


          <div> <br />
          <label>
          Category
          </label> <br /> <br />
          
          <select ref="category">
            {categoryOptions}
          </select>


          </div> <br/>
          
          <input type="submit" /> <br />
          
          </form>
          
          </div>
        );
  }
}

AddProject.propTypes = {
    
addProject:PropTypes.func

}

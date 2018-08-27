import React from "react";
import {Link,Switch,Route } from "react-router-dom";
import axios from "axios";
import NewNote from "./NewNote";


class Notes extends React.Component {
    constructor() {
      super();
      this.state = {
        getAllNotes: [],
        message: ''
      }
    }
  
    componentDidMount(){
      axios
        .get("/users/getAllNotes")
        .then(res=>{
          this.setState({
            getAllNotes: res.data
          })
        })
        .catch(err=>{
          this.setState({
            message:"Error getting Notes"
          })
        })
    }
  
    render(){
      const {getAllNotes, message} = this.state;
      console.log(this.state);
      return(
        <div>

   <div class="topnav">
<Link to='/' className='clevernote'>Clevernote</Link>
<Link to='Notes' className='link'><button type="button">View Notes </button></Link>
<Link to='About' className='link'><button type="button">About </button></Link>

</div>
<h1>All Notes</h1>   

  {message}   
  <div>
    <ul>
      {getAllNotes.map(note=>{
          return (
           <div className='notes'>
            <div className='note'>
            <li key={note.id}>
             <Link to={`/notes/${note.id}`}>
               <h3>{note.title}</h3>
             </Link>
               <p> {note.content}</p>
              </li>
                </div>
            </div>
          )
        })
      }
      </ul>
  </div>

  <Link to='/Notes/New' className='link'><button type="button">New Note </button></Link>

  </div>
      )
    }
  }
  
  
  export default Notes;
import React from "react";
import {Link } from "react-router-dom";
import axios from 'axios';

class NewNote extends React.Component {
    constructor() {
      super();
      this.state = {
        title:"",
        content:"",
        message2:""
      }
    }

    
    handleInputChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        })
      }

    handleForm = e => {
        e.preventDefault();
        const { message2,title,content} = this.state;
        console.log(this.state);
        axios
        .post('/users/addNote',{
        
            title:title,
            content:content,

        })
        .then(()=>{
            this.setState({
                title:"",
                content:"",
                message2:"success"
            })
        })
        .catch(err=>{
            this.setState({
                message2:"error posting"
            })
        })
    }

render(){
    const {message2,content,title} = this.state;

    return(
        <div>
 
       <div class="topnav">
<Link to='/' className='clevernote'>Clevernote</Link>
<Link to='/Notes' className='link'><button type="button">View Notes </button></Link>
<Link to='/About' className='link'><button type="button">About </button></Link>

</div>


            <form onSubmit={this.handleForm}>
            <input 
              type="text" 
              onChange={this.handleInputChange}
              placeholder="Note Title"
              name="title"
              value={title} />
<input 
              type="text" 
              onChange={this.handleInputChange}
              placeholder="Note Text"
              name="content"
              value={content} />
            <br />

            <button onClick={this.handleForm}>Submit</button>

          </form>
            {message2}
        </div>
    )
}
}

export default NewNote;
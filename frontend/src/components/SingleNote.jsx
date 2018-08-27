import React, { Component } from "react";
import axios from "axios";
import {Link } from "react-router-dom";


class SingleNote extends Component {
  constructor() {
    super()
    this.state = {
      title: "",
      content: ""
,      message3:""
    }
  }

  componentDidMount() {
   
    const { match } = this.props;
    axios
        .get(`/users/singlenote/${match.params.id}`)
        .then(res => {
          this.setState({
            title: res.data[0].title,
            content: res.data[0].content
          })
        })
  }

    

  render() {
    // const { match } = this.props;
    const { content, title} = this.state;
return(
    <div>
          <div class="topnav">
<Link to='/' className='clevernote'>Clevernote</Link>
<Link to='/Notes' className='link'><button type="button">View Notes </button></Link>
<Link to='/About' className='link'><button type="button">About </button></Link>

</div>

<br />

<div className='singlenote'>
       <h3> {title}</h3>
       <p>{content}</p>
</div>
       <br />
       <button onClick={this.handle}>Delete Note</button>

    </div>
)  
}
}

export default SingleNote;
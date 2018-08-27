import React from "react";
import {Link } from "react-router-dom";



const Home = () => (
  <div>
<h1>Clevernote</h1>   
<div className="flex-container">

<div><Link to='About'><button type="button">About </button></Link></div>
<div><Link to='Notes'><button type="button">View Notes </button></Link></div>
  
      </div>
  </div>
);

export default Home;
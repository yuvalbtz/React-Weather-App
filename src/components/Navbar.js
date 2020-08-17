import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import  {Card, Button, Navbar, Form, Nav, FormControl, Col } from 'react-bootstrap';
import { Link} from 'react-router-dom'
function navbar() {
    return (
       <nav>
           <h3 style={{padding:0, margin:5}}>Traveler Weather App</h3>
           <ul>
               <Link style={{textDecoration:"none"}} to="/">
               <li>Home</li>
               </Link>
               
           </ul>

       </nav>
      
    )
}

export default navbar

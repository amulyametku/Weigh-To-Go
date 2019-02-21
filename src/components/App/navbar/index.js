import React from "react";
import '../../App/app.css';

class Navbar extends React.Component{
    render(){

        return(
        <div>
        <ul>
        <li><a class="active" href="/">My Day</a></li>
        <li><a href="#news">Log</a></li>
        <li><a href="recipes">Recipes</a></li>
        <li><a href="#about">My Profile</a></li>
        </ul>
        </div>
        )
    }
}



export default Navbar;
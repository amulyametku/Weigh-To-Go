import React from 'react';
import Breakfast from '../Breakfast/index';
import Lunch from '../lunch/index';
import Dinner from '../dinner/index';
import Navbar from "../navbar";

export default class Meal extends React.Component{
    render(){
        return(
            <div>
            <Breakfast/>
            <Lunch/>
            <Dinner/>
            <Navbar/>
            </div>
        )
    }
}
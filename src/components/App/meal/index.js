import React from 'react';
import Breakfast from '../Breakfast/index';
import Navbar from "../navbar";

export default class Meal extends React.Component{
    render(){
        return(
            <div>
            <Breakfast name={'Breakfast'} />     
            <Navbar/>
            </div>
        )
    }
}
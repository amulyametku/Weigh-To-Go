import React from "react";
//import Meal from "../meal";
import { Table  } from 'react-bootstrap';
export default class FoodTable extends React.Component{

    constructor(props)  {
        super(props);
        this.state = {id: ''};
   }

  render()
  {
    console.log("Render: "+ this.state.id)
    return(
        <div>
        <Table striped bordered condensed hover>
        <thead>
          <tr>
          <th>Food Id</th>
            <th>Food Name</th>
            <th>Food Calorie</th>
          </tr>
        </thead>
        <tbody> {this.state.id.map((foodItem, index) => {
             return (
                <tr key={index} >
                    <td>{foodItem.Id}</td>
                        <td>{foodItem.name}</td>
                        <td>{foodItem.calories}</td>
                        
                </tr>
            )
        })}
        </tbody>
        </Table>
        </div> 
    )
  }
}
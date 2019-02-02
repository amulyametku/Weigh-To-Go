import React from "react";
import { Table ,Button } from 'react-bootstrap';

class Foodmenu extends React.Component{

    constructor(props){
    super(props);
    this.state = {
        data: [],
        quantity: ''
    }
    this.onAddClick = this.onAddClick.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    }

    onAddClick = function(foodItem){
       
        console.log('Name: ' + foodItem.name);
        console.log('Calories: ' + foodItem.calories);
        console.log('Index: ' , foodItem.Id);
        this.props.history.push({
          pathname: '/',
           state: {
              id: foodItem.Id,
              name : foodItem.name,
              calories: foodItem.calories,
              quantity: this.state.quantity
          } 
      });  
      event.preventDefault();
    }
   
    componentDidMount(){

    const url = "http://10.10.200.12:9000/foods"; 
    //const url = "http://localhost:9000/foods"; 
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    headers.append('Access-Control-Allow-Origin', url);
    headers.append('Access-Control-Allow-Credentials', 'true');

    headers.append('GET', 'POST');

    fetch(url, {
        headers: headers,
        method: 'GET'
    })
    .then(response => response.json())
    .then(contents => {console.log("in fetch: "+ contents);
                        this.setState ({
                        data : contents})
         })
    .catch(() => console.log("Can’t access " + url + " response. "))
   
  }

 
  handleQuantityChange(event) {
    this.setState({quantity: event.target.value});
    //console.log("Quantity read: " + quantity);
  }

  render()
  {
    console.log("Render: "+ this.state.quantity)
    return(
        <div>
        <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>Food Name</th>
            <th>Food Calorie</th>
          </tr>
        </thead>
        <tbody> {this.state.data.map((foodItem, index) => {
             return (
                <tr key={index} >
                        <td>{foodItem.name}</td>
                        <td>{foodItem.calories}</td>                        
                        <td>  <input type="text" ref= {"first val" + this.props.index} name="quantity" autoFocus value={this.state.quantity} onChange={this.handleQuantityChange}/></td>
                        <td>  <Button bsStyle="primary" bsSize="small" onClick={() => this.onAddClick(foodItem)}>Add</Button></td>
                </tr>
            )
        })}
        </tbody>
        </Table>

        <Button bsStyle="success" bsSize="large" block>Submit</Button>

        </div> 
    )
  }
}

export default Foodmenu;

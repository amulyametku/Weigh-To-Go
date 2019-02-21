import React from "react";
import ReactDOM from "react-dom";
import { Table, Button } from 'react-bootstrap';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

class Foodmenu extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      data: [],
    }
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
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

  handleQuantityChange() {
    //this.setState({quantity: event.target.value});
    console.log('quanity selected' + event.target.value);
  }

  

  render() {

    return (
      <div>
        <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>Food Name</th>
            <th>Food Calorie</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
         
            {this.state.data.map((foodItem, index) => {
             return (
                <tr key={index} >
                        <td>{foodItem.name}</td>
                        <td>{foodItem.calories}</td>                        
                        <td>  <input type="text" name="quantity" autoFocus value={this.state.data.quantity} onChange={this.handleQuantityChange}/></td>
                        <td>  <Button bsStyle="primary" bsSize="small" onClick={() => this.props.onAddClick(foodItem)}>Add</Button></td>
                </tr>
            )
        })}
        </tbody>
        </Table>

        </div> 

    )

  }

}
ReactDOM.render(<Foodmenu />, document.getElementById('root'));



/*
class Foodmenu extends React.Component{

    constructor(props){
    super(props);
    this.state = {
        data: [],
    }
    this.onAddClick = this.onAddClick.bind(this);
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
            <th>Quantity</th>
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

        </div> 
    )
  }
}
*/
export default Foodmenu;

/*

var fooddata = {
  content: {
      food: [
        {
          id: 1,
          name: "Banana",
          calorie: 80,
          quantity: ''
        },
        {
          id: 2,
          name: "Apple",
          calorie: 75,
          quantity: ''
        },
        {
          id: 3,
          name: "Walnuts",
          calorie: 95,
          quantity: ''
        }
      ]
   }
};
*/
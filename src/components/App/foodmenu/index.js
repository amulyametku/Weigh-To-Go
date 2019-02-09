import React from "react";
import ReactDOM from "react-dom";
import { Table, Button } from 'react-bootstrap';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

var fooddata = [
  {
    id: 1,
    name: "Banana",
    calorie: 80
  },
  {
    id: 2,
    name: "Apple",
    calorie: 75
  },
  {
    id: 3,
    name: "Walnuts",
    calorie: 95
  }
]

function MyListItem({ foodItem, onAddClick }) {
  return (
    <ListItem  key={`item-${foodItem.id}`} button onClick={() => onAddClick(foodItem)}>
    {foodItem.name} {foodItem.calories}
    </ListItem>
  )
}

class Foodmenu extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      data: [],
      quantity: '1'
  }
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


  render() {

    return (
      // <List>
      //   {
      //     this.props.contents.map(foodItem=> <MyListItem foodItem={foodItem} onAddClick={this.props.onAddClick} />)
      //   }
      // </List>
      
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
          {} 
            {this.state.data.map((foodItem, index) => {
             return (
                <tr key={index} >
                        <td>{foodItem.name}</td>
                        <td>{foodItem.calories}</td>                        
                        <td>  <input type="text" ref= {"first val" + this.props.index} name="quantity" autoFocus value={this.state.quantity} /></td>
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

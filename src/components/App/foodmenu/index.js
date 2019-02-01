import React from "react";
import { Table ,Button } from 'react-bootstrap';

class Foodmenu extends React.Component{

    constructor(props){
    super(props);
    this.state = {
        data: [],
        value: '1'
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
              calories: foodItem.calories
          } 
      });  
      event.preventDefault();
    }
   
    componentDidMount(){

    const url = "http://10.10.200.25:9000/foods"; 
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
    this.setState({value: event.target.value});
    console.log("Quantity read: " + this.value);
  }

  render()
  {
    console.log("Render: "+ this.state.data)
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
                        <td>  <input type="text" name="quantity" value={this.state.value} onChange={this.handleQuantityChange}/></td>
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


/*
//ajax 
class Foodmenu extends React.Component {
    constructor(){
        super() 
          this.state = {
            data: []
          }
        
      }
      componentDidMount() {
        $.ajax({
           url: "http://localhost:9000/foods",
           type: "GET",
           dataType: 'json',
           ContentType: 'application/json',
           success: function(data) {
             
             this.setState({data: data});
           }.bind(this),
           error: function(jqXHR) {
             console.log(jqXHR);
           }.bind(this)
        })
      }
      render() {
        
        return (
          <table>
          <tbody>{this.state.data && this.state.data.map(function(item, key) {
                 
                   return (
                      <tr key = {key}>
                          <td>{item.name}</td>
                          <td>{item.calorie}</td>
                      </tr>
                    )
                 
                 })}</tbody>
           </table>
        )
      }
}
*/
export default Foodmenu;
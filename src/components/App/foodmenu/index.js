import React from "react";
import ReactDOM from "react-dom";




//Running ok
class Foodmenu extends React.Component{
    constructor()
  {
    super();
    this.state={
      data: []
    }
  }

  componentDidMount()
  {

    const url = "http://10.10.200.25:9000/foods"; 
    
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    headers.append('Access-Control-Allow-Origin', 'http://10.10.200.25:9000/foods');
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

  render()
  {
    console.log("Render: "+ this.state.data)
    return(
       
        <div>
        <ul>
                    {this.state.data.map(function(foodItem, index) {
                    return (
                        <div key={index}>
                                <h1>{foodItem.id}</h1>
                                <h1>{foodItem.name}</h1>
                                <p>{foodItem.calories}</p>
                        </div>
                    )
                    }

                )}
            </ul>
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
import React from "react";
import ReactDOM from "react-dom";

var data = { a: 1, b: 2 };

class Foodmenu extends React.Component{

    render() {
    
        return (<div><pre>{JSON.stringify(data, null, 2) }</pre></div>);
   }
   
}
ReactDOM.render(<Foodmenu/>, document.getElementById('root'));



















/*
class Foodmenu extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
      }
    
    componentDidMount() {
       fetch("http://10.10.200.25:9000/foods")
     
      .then(res => res.json())
      .then(
        //console.log(res)
        
        (result) => {
            this.setState({
              isLoaded: true,
              items: result.items
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }

    render(){
        const { error, isLoaded, items } = this.state;
        if (error) {
             return <div>Error: {error.message}</div>;
        
        } else {
            return(
                <div>
                <h1>Food items</h1>

                <ul>
                    {items.map(item => (
                        <li key={item.name}>
                        { item.name} {item.calories}


                        </li>
                     ))}
                 </ul>
        </div>
        );
    }
}

} */
export default Foodmenu;
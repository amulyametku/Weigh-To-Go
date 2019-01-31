import React from "react";

function fetchDetails(id){
    const request = new Request('/foodmenu/' + id,
    {method:'GET', headers:{'Content-Type' : 'application/json'}});
    return fetch(request);
}

export default class Fooddetails extends React.Component{

    
    state = {
        id: '',
        name : '',
        calories: ''
    }

    componentDidMount(){
        let self = this;
        fetchDetails(this.props.match.params.id)
        .then(res=> res.json())
        .then(function(data){
            self.setState({
                id: data[0],
                name : data[1],
                calories: data[2]
            })
            });
    }
    
    render(){
        return(
            <div>
            <section>
                <h3> View Details </h3>
                <div> Id : {this.state.id} </div>
                <div> Name : {this.state.name} </div>
                <div> Cal : {this.state.calories} </div>
            </section>
            </div>
        )
    }
}

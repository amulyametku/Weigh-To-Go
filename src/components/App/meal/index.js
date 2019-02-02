import React , { PureComponent }from "react";
import styled from "styled-components";
import { Table, ButtonGroup  } from 'react-bootstrap';
import Navbar from "../navbar";

class Meal extends React.Component{
  
    constructor(props){
        super(props);
        this.routeChange = this.routeChange.bind(this);
        this.calculateTotalCalories = this.calculateTotalCalories.bind(this);
        this.handleOKButton = this.handleOKButton.bind(this);
        this.state = {
            id : '',
            name : '',
            calories: '',
            quantity: ''
        }
    }

    componentDidMount(){
        console.log(this.props.location.state);
        this.setState({
            id: this.props.location.state.id,
            name: this.props.location.state.name,
            calories: this.props.location.state.calories,
            quantity : this.props.location.state.quantity
        })
    }

    routeChange(){
        let path = `foodmenu`;
        this.props.history.push(path);
        }


    calculateTotalCalories(calories, quantity){
        return calories * quantity;
    }
  
    handleOKButton(){
        console.log('added');
    }

    render(){
        console.log('from parent'+ this.state.quantity);
        return (
           
            <div>

            <Wrapper>
                <Title>
                    Breakfast                  
                        <Coloumn> <Button onClick={this.routeChange}> Add item </Button> </Coloumn>
                </Title>
            </Wrapper>


            <Table responsive striped bordered hover>
            <thead>
          
                <tr>
                <th> NAME </th>
                <th> CALORIES(For 100 g) </th>
                <th> QUANTITY </th>
                <th> TOTAL CALORIES </th>
                </tr>
                <tr>
                <td>{this.state.name}</td> 
                <td>{this.state.calories}</td> 
                <td>{this.state.quantity}</td> 
                <td>{this.calculateTotalCalories(this.state.calories, this.state.quantity)}</td>
                <td> 
                    <ButtonGroup >
                        <Button_OK onclick={this.handleOKButton}>OK</ Button_OK>
                        <Button_Cancel>Cancel</Button_Cancel>
                    </ButtonGroup>
                </td>
                </tr> 
        
            </thead>
            </Table>
            
            <Navbar/>
            </div>
        );
    }
}

const Title = styled.h1`
  font-size: 1.5em;
  text-align: left;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 2em;
  background: papayawhip;
`;

const Coloumn = styled.div`
  float : right;
`;

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};
  //font-size: 1em;
  font-size: 12px;
  display: inline-block
  display: block;
  margin: 1em;
  //padding: 5px;
  width: 150px;
  height: 40px;
  padding: 0.50em 1em;
  border: 2px solid palevioletred;
  border-radius: 5px;
  :hover {      
    color: red;
  }
  ::after {
    content: '➕';
  }
`;




const  Button_OK = styled.button`
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 10px 12px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 8px;
  margin: 2px 1px;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  cursor: pointer;
`;
const Button_Cancel = styled.button`
  background-color: #f44336;
  border: none;
  color: white;
  padding: 10px 12px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 8px;
  margin: 2px 1px;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  cursor: pointer;
`;


export default Meal;

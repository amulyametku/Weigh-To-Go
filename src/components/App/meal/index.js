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
        this.handleAddRow = this.handleAddRow.bind(this);
       
        this.state = {
            rows: [{}]
        }
    }

    
    componentDidMount(){
        console.log(this.props.location.state);
        const item = {
            id: '',
            name: '',
            calories: '',
            quantity: ''
          };
        this.setState({
            rows: [...this.state.rows, item]        
            // id: this.props.location.state.id,
            // name: this.props.location.state.name,
            // calories: this.props.location.state.calories,
            // quantity : this.props.location.state.quantity
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

    handleAddRow = () => {
        const item = {
          id: "",
          name: "",
          calories: '',
          quantity: ''
        };
        this.setState({
          rows: [...this.state.rows, item]
        });
      };

    handleChange = idx => e => {
        const { name, calories } = e.target;
        const rows = [...this.state.rows];
        rows[idx] = {
          [name]: value
        };
        this.setState({
          rows
        });
    };
 
    handleRemoveRow = () => {
        this.setState({
          rows: this.state.rows.slice(0, -1)
        });
      };
      handleRemoveSpecificRow = (idx) => () => {
        const rows = [...this.state.rows]
        rows.splice(idx, 1)
        this.setState({ rows })
      }

    render(){
        console.log('from parent'+ this.state.quantity);
        return (
           
            <div>

            <Wrapper>
                <Title>
                    Breakfast                  
                        <Coloumn> <Button onClick={this.routeChange}> Choose item </Button> </Coloumn>
                </Title>
            </Wrapper>


            {/* <Table responsive striped bordered hover>
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

                <Button_OK onClick={this.handleOKButton} className="btn btn-primary">
                Add 
                </Button_OK>

                <Button_Cancel>Cancel</Button_Cancel>
                    
                </td>
                </tr> 
        
            </thead>
            </Table> */}


        <div className="container">
          <div className="row clearfix">
            <div className="col-md-12 column">
              <table
                className="table table-bordered table-hover"
                id="tab_logic"
              >
                <thead>
                  <tr>
                    <th className="text-center"> # </th>
                    <th className="text-center"> Name </th>
                    <th className="text-center"> Calories </th>
                    <th className="text-center"> Quantity </th>
                    <th /><th />
                  </tr>
                </thead>
                <tbody>
                  {this.state.rows.map((item, idx) => (
                    <tr id="addr0" key={idx}>
                      <td>{idx}</td>
                      <td>
                        <input
                          type="text"
                          name="name"
                          value={this.state.rows[idx].name}
                          onChange={this.handleChange(idx)}
                          className="form-control"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="calories"
                          value={this.state.rows[idx].calories}
                          onChange={this.handleChange(idx)}
                          className="form-control"
                        />
                      </td>

                      <td>
                        <input
                          type="text"
                          name="quantity"
                          value={this.state.rows[idx].quantity}
                          onChange={this.handleChange(idx)}
                          className="form-control"
                        />
                      </td>

                      <td>
                        <button
                          className="btn btn-outline-danger btn-sm"
                          onClick={this.handleOKButton(idx)}
                        >
                          Save
                        </button>
                      </td>

                      <td>
                        <button
                          className="btn btn-outline-danger btn-sm"
                          onClick={this.handleRemoveSpecificRow(idx)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button onClick={this.handleAddRow} className="btn btn-primary">
                Add New Item
              </button>
              <button
                onClick={this.handleRemoveRow}
                className="btn btn-danger float-right"
              >
                Delete Last Item
              </button>
            </div>
          </div>
        </div>

            
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

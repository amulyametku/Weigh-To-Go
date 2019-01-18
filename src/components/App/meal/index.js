import React from "react";
import styled from "styled-components"
import { withRouter } from 'react-router-dom';

class Meal extends React.Component{
  
    constructor(props){
        super(props);
        this.routeChange = this.routeChange.bind(this);
    }

    routeChange(){
        let path = `foodmenu`;
        this.props.history.push(path);
        }

    render(){
        return (
            <div>
            <Wrapper>
                <Title>
                    Breakfast                  
                        <Coloumn> <Button 
                        onClick={this.routeChange}
                        > Add item </Button>
                       
                        </Coloumn>
                </Title>
            </Wrapper>
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


export default Meal;
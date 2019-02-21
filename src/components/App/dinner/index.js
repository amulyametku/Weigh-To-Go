import React from "react";
import styled from "styled-components";
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Foodmenu from '../foodmenu/index';

class Dinner extends React.Component{
  
  state = {
    selectedItems: [],
    selectDialogOpen: false,
  }

    constructor(props){
        super(props);
        this.routeChange = this.routeChange.bind(this);
        this.onSaveClick = this.onSaveClick.bind(this);
    }

    routeChange(){
        let path = `foodmenu`;
        this.props.history.push(path);
    }

    handleDialogOpen = () => {
      this.setState({selectDialogOpen: true})
    }

    onAddClick = (foodItem) => {
      console.log('Quantity in breaky: ' + foodItem.quantity);
      
      this.setState((state) => {
          const {selectedItems} = state;
          const _items = [...selectedItems, foodItem];
          console.log({_items});
          return {selectedItems: _items, selectDialogOpen:false};
      })
    }

    onSaveClick(){
      const url = "http://10.10.200.25:9000/food"; 
      let headers = new Headers();
  
      headers.append('Content-Type', 'application/json');
      headers.append('Accept', 'application/json');
  
      headers.append('Access-Control-Allow-Origin', url);
      headers.append('Access-Control-Allow-Credentials', 'true');
  
      headers.append('GET', 'POST');
      
      e.preventDefault();
      fetch(url, {
          headers: headers,
          method: 'POST',
          body: JSON.stringify(this.state.selectedItems) 
      })
      .then(console.log('Saved: '  + this.state.selectedItems))
      .catch(() => console.log("Can’t access " + url + " response. "))


    }
    

    render(){

      return (
        <div>
            <Wrapper>
                <Title>
                    Dinner
                    <Coloumn> 
                      <Button onClick={this.handleDialogOpen}> Add item </Button>
                    </Coloumn>
                </Title>
            </Wrapper>


            <Dialog open={this.state.selectDialogOpen} onClose={this.onAddClick} aria-labelledby="simple-dialog-title">
                <DialogTitle id="simple-dialog-title">Select food items:</DialogTitle>
                <Foodmenu onAddClick={this.onAddClick}/>
            </Dialog>
            {
                this.state.selectedItems.map(item =>
                   <p> 
                        {item.name} {item.calories} {item.quantity}
                         
                   </p>
                )
                
            }
            <Button_OK onSaveClick={this.onSaveClick}> Save items </Button_OK>
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
  float : center;
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


export default Dinner;

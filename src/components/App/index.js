import React from 'react';
import ReactDOM from 'react-dom';
import Meal from "./meal/index";
import Foodmenu from "./foodmenu/index";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Recipes from './recipes';

class App extends React.Component {
    render(){
        return(
            <Router>
            <div>
              <Route exact path="/" component={Meal}/>
              <Route path="/foodmenu" component={Foodmenu}/> 
              <Route path="/recipes" component={Recipes}/> 
            </div>
          </Router>
        );
    }
}

export default App;
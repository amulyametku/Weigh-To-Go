import React from 'react';
import ReactDOM from 'react-dom';
import Meal from "./meal/index";
import Foodmenu from "./foodmenu/index";
import Fooddetails from "./fooddetails/index";
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends React.Component {
    render(){
        return(
            <Router>
            <div>
              <Route exact path="/" component={Meal}/>
              <Route path="/foodmenu" component={Foodmenu}/>
              <Route path="/fooddetails" component={Fooddetails}/>
            </div>
          </Router>
        );
    }
}

export default App;
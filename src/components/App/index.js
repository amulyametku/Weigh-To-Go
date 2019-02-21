import React from 'react';
import Meal from "./meal/index";
import Foodmenu from "./foodmenu/index";
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import Recipes from './recipes';
import SignInForm from './pages/SignInForm';
import SignUpForm from './pages/SignUpForm';
import '../App/app.css';

class App extends React.Component {
    render(){
        return(
            <Router>
            <div>
              <Route exact path="/" component={Meal}/>
              <Route path="/foodmenu" component={Foodmenu}/> 
              <Route path="/recipes" component={Recipes}/> 
              <Route path="/signin" component={SignInForm}/> 
              <Route path="/signup" component={SignUpForm}/>
              
            {/* <div className="App__Form">
            <div className="PageSwitcher">
                <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
              </div>

              <div className="FormTitle">
                  <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
              </div>

              <Route path="/sign-up" component={SignUpForm}>
              </Route>
              <Route path="/sign-in" component={SignInForm}>
              </Route>
          </div> */}
            </div>
          </Router>
        );
    }
}

export default App;
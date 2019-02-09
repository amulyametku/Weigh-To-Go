import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignUpForm extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            name: '',
            dateofbirth: '',
            gender:'',
            height:'',
            weight:'',
            hasAgreed: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log('The form was submitted with the following data:');
        console.log(this.state);
    }
    
   
   
    render() {
        return (
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields">
              <div className="FormField">
                <label className="FormField__Label" htmlFor="name">Full Name</label>
                <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name="name" value={this.state.name} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="dateofbirth">Date of Birth</label>
                <input type="date" id="dateofbirth" className="FormField__Input" placeholder="Enter your  date of birth" name="dateofbirth" value={this.state.dateofbirth} onChange={this.handleChange} />
              </div>
              
              <div className="FormField">
                <label className="FormField__Label" htmlFor="gender">Gender</label><br/>
                <label>  <input type="radio"    name="gender"   value="male" checked={this.state.gender === "male" } onChange={this.handleChange} />Male</label>
                <label><input type="radio"  name="gender"   value="female" checked={this.state.gender === "female" } onChange={this.handleChange} />Female</label><br/>
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="height">Height</label>
                <input type="number" name="height" step="0.01" min="4.00" max="12.99" value={this.state.height} onChange={this.handleChange}/>
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="weight">Weight</label>
                <input type="number" name="weight" step="1" min="10" max="150" value={this.state.weight} onChange={this.handleChange}/>
              </div>
            {/*      
              <div className="FormField">
                <label className="FormField__CheckboxLabel">
                    <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange} /> I agree all statements in <a href="" className="FormField__TermsLink">terms of service</a>
                </label>
              </div>*/}

              <div className="FormField">
                  <button className="FormField__Button mr-20">Sign Up</button> <Link to="/sign-in" className="FormField__Link">I'm already member</Link>
              </div>
            </form>
          </div>
        );
    }
}

export default SignUpForm;

import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {loginUser} from '../../action/authAction';
// i mport className from 'classnames'
// import axios from 'axios';

class Login extends Component{
    constructor(){
        super();
        this.state={
            email:'',
            password:''
            
        }
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this)
    }

    UNSAFE_componentWillReceiveProps(nextProps){
      if(nextProps.auth.isAuthenticated){
        this.props.history.push('/dashboard');
      }
    }
    onSubmit(e){
      e.preventDefault();
      
      const userData={
        email:this.state.email,
        password:this.state.password
      }
      this.props.loginUser(userData);
      // axios.post('http://localhost:4000/users/login',account)
      // .then(res=>console.log("successfully logged in"))
      // .catch(err=>console.log(err))
     
    }
    onChange(e){
      this.setState({[e.target.name]:e.target.value});
    }
 
    render(){
      //  const {errors} =this.state;
        return(
            <div className="login">
            <div className="container">
              <div className="row">
                <div className="col-md-8 m-auto">
                  <h1 className="display-4 text-center">Log In</h1>
                  <p className="lead text-center">Sign in to your DevConnector account</p>
                  <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                      <input type="email" 
                      className="form-control form-control-lg" 
                      placeholder="Email Address"
                       name="email" 
                       onChange={this.onChange}
                       value={this.state.email}
                       />
                    </div>
                    <div className="form-group">
                      <input type="password" 
                      className="form-control form-control-lg" 
                      placeholder="Password" 
                      name="password" 
                      onChange={this.onChange}
                      value={this.state.password}
                      />
                    </div>
                    <input type="submit" className="btn btn-info btn-block mt-4" />
                  </form>
                </div>
              </div>
            </div>
          </div> 
        )
    }

}

Login.Prototype={
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.func.isRequired
  // errors: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
})

 export default connect(mapStateToProps,{loginUser}) (Login);
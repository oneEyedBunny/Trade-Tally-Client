import React from 'react';
import { connect } from 'react-redux';

import { login } from '../actions/auth-users';
import './login.css';

class Login extends React.Component {
  state = {
    username: 'Massage',
    password: 'testing0101',
    message: '',
  };

  //sets the inputs into state as the user types them into the form
  setInput = (event, key) => {
    this.setState({
      [key]: event.target.value
    });
  };

  //dispatches action which is ajax call to server
  handleSubmit = async event => {
    event.preventDefault();
    let credentials = this.state;
    try {
      await this.props.login(credentials);
      this.props.onHideForm();
    } catch (error) {
      console.log('error=', error);
      this.setState({
        message: `Your login credentials for ${error.location} failed`,
      })
      setTimeout(() => {
        this.setState({
          message: ''
        })
      }, 3000)
    }
  };

  render() {
    return (
      <form
        role='form'
        id='login-user-form'
        name='loginUser'
        onSubmit={this.handleSubmit}>
        <fieldset name='user-info' id='user-info' className='fieldset'>
          <label>Username:</label>
          <input
            className='login-form-fields'
            type='text'
            id='username'
            name='username'
            required
            value={this.state.username}
            onChange={e => {
              this.setInput(e, 'username')
              this.setState({message:''})
            }}
            />
          <label>Password:</label>
          <input
            className='login-form-fields'
            type='password'
            id='password'
            name='password'
            required
            value={this.state.password}
            onChange={e => this.setInput(e, 'password')}
            />
          <button role='button' id='login-user-button' className='button' type='submit'>
            Login
          </button>
          <div id='demo-container'>
            <h5 className='demo-info'> Demo it:</h5>
            <h5 className='demo-credentials user'> u: demoDanny</h5>
            <h5 className='demo-credentials password'> p: demoFun111</h5>
          </div>
          <div className='error-message-container'> {this.state.message} </div>
        </fieldset>
      </form>
    );
  }
}

const mapDispatchToProps = { login };
export default connect(undefined,mapDispatchToProps)(Login);

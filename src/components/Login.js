import React from "react"

import { handleLogin, } from "../services/auth"

class Login extends React.Component {
  
  state = {
    username: ``,
    password: ``,
  }

  handleUpdate = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    
    handleLogin(this.state)?this.props.onSuccess():this.props.onFailure()
  }

  render() {

    return (
      <form
          method="post"
          onSubmit={event => {
            this.handleSubmit(event)
          }}
        >
        <div className="field">
          <label className="label" htmlFor={"username"} >User Name</label>
          <div className="control">
            <input className="input" type={"text"} name={"username"} id={"username"} required={true}
              value={this.state.username}
              onChange={this.handleUpdate} />
          </div>
        </div>
        
        <div className="field">
          <label className="label" htmlFor={"password"} >Password</label>
          <div className="control">
            <input className="input" type="password" name="password" id={"password"} required={true}
              value={this.state.password}
              onChange={this.handleUpdate} />
          </div>
        </div>
        
        <div className="field">
          <button className="button is-link" type="submit">Submit</button>
        </div>

      </form>
    )
  }
}

export default Login
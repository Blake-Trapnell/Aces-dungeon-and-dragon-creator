import React, {Component} from "react"
import "./Login.css"
import axios from "axios"
import { setUser } from "../../ducks/reducer"
import { connect } from "react-redux"

class Login extends Component {
    state = {
        usernameInput: '',
        emailInput: '',
        passwordInput: ''
       }

handleChange(e,key) {
    this.setState({
        [key]: e.target.value
    })
}

registerUser = () => {
    const {
      usernameInput: username,
      passwordInput: password,
      emailInput: email,
    } = this.state
    axios.post('/auth/register', { username, password, email})
      .then(res => {
          const {user_id} = res.data.user.user_id
        this.props.setUser({username, email, user_id})
        this.props.history.push('/home')
      })
      .catch(err => {
        alert('username & or email is already in use.')
      })
    }

    login = () => {
        const {
            usernameInput: username,
            passwordInput: password,
            emailInput: email,
          } = this.state
        axios.post('/auth/login', {username, password, email})
        .then(res => {
            const{user_id} = res.data.user
            this.props.setUser({username, user_id})
            this.props.history.push('/home')
        })
        .catch(err => {
            alert('Incorrect username & or password')
          })
    }

    render() {

        return (
            <div>
            <div className="Login_Outer">
                <div className="Login_Background">

                <div className="Login_main">
                    <div className="Login_Input_Container">
                        <input onChange ={e => this.handleChange(e, "usernameInput")} className="Login_Inputs" type="text" placeholder="Username" />
                        <input onChange ={e => this.handleChange(e, "emailInput")} className="Login_Inputs" type="text" placeholder="Email" />
                        <input onChange ={e => this.handleChange(e, "passwordInput")} className="Login_Inputs" type="password" placeholder="Password" />
                    </div>
                    <div className="Login_Button_container">
                        <div>
                        <button className="Login_Button" onClick={this.login} >Login</button>
                        </div>
                        <div>
                        <button className="Login_Button" onClick ={this.registerUser} >Register</button>
                        </div>
                    </div>
                </div>
                </div>

            </div>
        </div>
    )
}
}
export default connect(null,
    {setUser})(Login);
import React, { Component } from "react"
import "./Nav.css"
import { Link } from "react-router-dom"
import { setUser, setAllSheets, setUserSheets } from "../../ducks/reducer"
import { connect } from "react-redux"
import axios from "axios"
import { withRouter } from "react-router-dom"


class Nav extends Component {

    componentWillUnmount() {
    }
    logout() {
        axios.delete('/auth/logout')
    }


    render() {
        return (
            <div className="Nav_main">
                <div className="Nav_gradient">
                    <header className="Nav_Header">
                        <div className="Nav_Builders">
                            <div className="Nav_Hamburger">
                                <h5>Menu</h5>
                            </div>
                            <div className="Nav_Links">
                                <Link to="/home">
                                    <h3 className="Nav_h3">Home</h3>
                                </Link>
                            </div>
                            <div id="AdventureLeague" className="Nav_Links">
                                <Link to="/adventureleague/raceandclass">
                                    <h3 className="Nav_h3">Adventure</h3>
                                </Link>
                            </div>
                            <div className="Nav_Links">
                                <h3 className="Nav_h3" >Custom</h3>
                            </div>
                            <div className="Nav_Links">
                                <h3 className="Nav_h3">Random</h3>
                            </div>
                        </div>

                        <div className="Nav Login">
                            {this.props.user_id ?
                                <Link to="/">
                                    <div onClick={this.logout}>
                                        <h5>{this.props.username}</h5>
                                        <h5>/Logout</h5>
                                    </div>
                                </Link>
                                :
                                <Link to="/">
                                    <div>
                                        <h3>Login/ Register</h3>
                                    </div>
                                </Link>
                            }
                        </div>

                    </header>
                    <div id="dropdown" className="dropdown hide">
                        <div className="Nav_container">
                            <li>Home</li>
                            <li>Adenture</li>
                            <li>Custom</li>
                            <li>Random</li>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    const { username, email, user_id } = state
    return { username, email, user_id }
}

export default connect(mapStateToProps, { setUser, setAllSheets, setUserSheets })(withRouter(Nav));
import React, { Component } from "react"
// import axios from "axios"
import { setUser } from "../../../../ducks/reducer"
import { connect } from "react-redux"
import "./Archetype.css"
import { Link } from "react-router-dom"


class Archetype extends Component {
    state = {
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        option5: '',
        option6: '',
    }
    // componentDidMount() {
    //     const playerClass = this.props.playerClass
        

    // }

    render() {
        return (
            <div className="Archetype_Outer">
                <div className="Archetype_main">
                    <div className="Archetype_Button_container">
                        
                        <Link to ="/adventureleague/skills">
                        <button onClick={this.saveStepTwo} className="Abilitypoints_Navigation" >Next</button>
                        </Link>
                        <Link to = "/adventureleague/abilitypoints">
                            <button className="Abilitypoints_Navigation">Previous</button>
                        </Link>
                        <Link to="/">
                            <button className="Abilitypoints_Navigation" >Cancel</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { playerClass} = state
    return { playerClass}
}

export default connect(mapStateToProps,
    { setUser})(Archetype);
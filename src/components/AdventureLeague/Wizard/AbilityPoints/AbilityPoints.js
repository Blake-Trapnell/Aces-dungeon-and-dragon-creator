import React, { Component } from "react"
// import axios from "axios"
import { setUser, setWizardStepTwo} from "../../../../ducks/reducer"
import { connect } from "react-redux"
import "./AbilityPoints.css"
import { Link } from "react-router-dom"


class AbilityPoints extends Component {
    state = {
        str: 15,
        dex: 14,
        wis: 13,
        int: 12,
        cha: 10,
        con: 8,

    }

    componentDidMount() {

    }

    handleChange(key,e) {
        this.setState({
            [key]: e
        })
    }

    strengthSwap(direction) {
        if(direction === 'down') {
            const newstrength = this.state.dex
            const newdexterity = this.state.str
            this.setState({
                str: newstrength,
                dex: newdexterity,
            })
        }
    }
    dexteritySwap(direction) {
        if(direction === 'down'){
            const newdexterity = this.state.wis
            const newwisdom = this.state.dex
            this.setState({
                dex: newdexterity,
                wis: newwisdom
            })
        }
        else if(direction === 'up') {
            const newdexterity = this.state.str
            const newstrength = this.state.dex
            this.setState({
                dex: newdexterity,
                str: newstrength
            })
        }
    }
    wisdomSwap(direction) {
        if(direction === 'down'){
            const newwis = this.state.int
            const newint = this.state.wis
            this.setState({
                wis: newwis,
                int: newint
            })
        }
        else if(direction === 'up') {
            const newwisdom = this.state.dex
            const newdex = this.state.wis
            this.setState({
                wis: newwisdom,
                dex: newdex
            })
        }
    }
    intelligenceSwap(direction) {
        if(direction === 'down'){
            const newint = this.state.cha
            const newcha = this.state.int
            this.setState({
                int: newint,
                cha: newcha
            })
        }
        else if(direction === 'up') {
            const newint = this.state.wis
            const newwis = this.state.int
            this.setState({
                int: newint,
                wis: newwis,
            })
        }
    }
        charismaSwap(direction) {
        if(direction === 'down'){
            const newcha = this.state.con
            const newcon = this.state.cha
            this.setState({
                cha: newcha,
                con: newcon
            })
        }
        else if(direction === 'up') {
            const newcha = this.state.int
            const newint = this.state.cha
            this.setState({
                cha: newcha,
                int: newint
            })
        }
    }
    constitutionSwap(direction) {
        if(direction === 'up'){
            const newcon = this.state.cha
            const newcha = this.state.con
            this.setState({
                con: newcon,
                cha: newcha
            })
        }
    }

    saveStepTwo = () => {
        const {ability_bonuses: modifiers} = this.props.raceinfo[0]
        const {str, dex, wis, int, cha, con} = this.state
        const newstats = [str, dex, wis, int, cha, con]
       const stats =  newstats.map((el, i)=>(
            el + modifiers[i]
        )) 
        this.props.setWizardStepTwo({str: stats[0], dex: stats[1], wis:stats[2], int: stats[3], cha: stats[4], con: stats[5]})
    }

    render() {
        return (
            <div className="Abilitypoints_Outer">
                <div className="Abilitypoints_main">
                    <div className="Abilitypoints_Inner_Left">
                        <h3 id="Abilitypoints_h3">Str: {this.state.str}</h3>
                        <h3 id="Abilitypoints_h3">Dex: {this.state.dex}</h3>
                        <h3 id="Abilitypoints_h3">Wis: {this.state.wis}</h3>
                        <h3 id="Abilitypoints_h3">int: {this.state.int}</h3>
                        <h3 id="Abilitypoints_h3">cha: {this.state.cha}</h3>
                        <h3 id="Abilitypoints_h3">con: {this.state.con}</h3>
                    </div>
                    <div className="Abilitypoints_Inner_Right">
                        <div className="Abilitypoints_Down">
                            <button onClick={()=>this.strengthSwap('down')} className="Abilitypoints_button" >↓</button>
                            <button onClick={()=>this.dexteritySwap('down')} className="Abilitypoints_button" >↓</button>
                            <button onClick={()=>this.wisdomSwap('down')} className="Abilitypoints_button" >↓</button>
                            <button onClick={()=>this.intelligenceSwap('down')} className="Abilitypoints_button" >↓</button>
                            <button onClick={()=>this.charismaSwap('down')} className="Abilitypoints_button" >↓</button>
                            <button className="Abilitypoints_button" >•</button>
                        </div>
                        <div className="Abilitypoints_Up">
                            <button id="Noshow" className="Abilitypoints_button" >•</button>
                            <button onClick={()=>this.dexteritySwap('up')} className="Abilitypoints_button" >↑</button>
                            <button onClick={()=>this.wisdomSwap('up')} className="Abilitypoints_button" >↑</button>
                            <button onClick={()=>this.intelligenceSwap('up')} className="Abilitypoints_button" >↑</button>
                            <button onClick={()=>this.charismaSwap('up')} className="Abilitypoints_button" >↑</button>
                            <button onClick={()=>this.constitutionSwap('up')} className="Abilitypoints_button" >↑</button>
                        </div>
                    </div>
                    {/* <div className="Adventure_Extra_Points">
                                    <h3>
                                        str: +{this.props.raceinfo[0].ability_bonuses[0]} dex: +{this.props.raceinfo[0].ability_bonuses[1]} wis: +{this.props.raceinfo[0].ability_bonuses[2]} int: +{this.props.raceinfo[0].ability_bonuses[3]} cha: +{this.props.raceinfo[0].ability_bonuses[4]} con: +{this.props.raceinfo[0].ability_bonuses[5]}
                                        </h3>
                        </div> */}
                    <div className="Abilitypoints_Button_container">
                        <Link to="/home">
                            <button className="Abilitypoints_Navigation" >Cancel</button>
                        </Link>
                        <Link to = "/adventureleague/raceandclass">
                            <button className="Abilitypoints_Navigation">Previous</button>
                        </Link>
                        <Link to ="/adventureleague/skills">
                        <button onClick={this.saveStepTwo} className="Abilitypoints_Navigation" >Next</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {username, email, user_id, raceinfo} = state
    return {username, email, user_id, raceinfo}
    }

export default connect(mapStateToProps,
    { setUser, setWizardStepTwo })(AbilityPoints);
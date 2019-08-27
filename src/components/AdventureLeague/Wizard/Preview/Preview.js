import React, { Component } from "react"
import axios from "axios"
import { setUser } from "../../../../ducks/reducer"
import { connect } from "react-redux"
import "./Preview.css"
import { Link } from "react-router-dom"


class Preview extends Component {
    state = {
        keys: []
    }
    componentDidMount() {
        const skills = this.props
        let keys = Object.keys(skills).filter(k => skills[k] === true)
        this.setState({
            keys
        })

    }

    addToDatabase = () => {
        const { user_id, characterName, playerName, background, alignment,
            str, dex, wis, int, cha, con, acrobatics, arcana, animal_handling, athletics, deception,
            history, insight, intimidation, investigation, medicine, nature, perception, performance,
            persuassion, religion, sleight_of_hand, stealth, survival, hit_die, speed } = this.props
        const race = this.props.raceinfo[0].name
        const playerClass = this.props.classinfo[0].name
        axios.post(`/api/sheets`, {
            user_id, characterName, playerName, race, playerClass, background, alignment,
            str, dex, wis, int, cha, con, acrobatics, arcana, animal_handling, athletics, deception,
            history, insight, intimidation, investigation, medicine, nature, perception, performance,
            persuassion, religion, sleight_of_hand, stealth, survival, hit_die, speed
        })
    }






    render() {
        const { keys } = this.state
        return (
            <div className="Preview_Outer">
                <div className="Preview_main">
                    <div className="Preview_Class_Race_Name">
                        <div className="Preview_Name">
                            <h1>{this.props.characterName}</h1>
                        </div>
                        <div className="Preview_Class_Race_container">
                            <div className="Preview_Class_Race">
                                <div className="Preview_Class">
                                    <h3>{this.props.classinfo[0].name}</h3>
                                    <h6 style={{ color: "grey" }}>Class</h6>
                                </div>
                                <div className="Preview_Race">
                                    <h3>{this.props.raceinfo[0].name}</h3>
                                    <h6 style={{ color: "grey" }}>Race</h6>
                                </div>
                            </div>
                            <div className="Preview_Alignment_Background">
                                <div className="Preview_Background">
                                    <h3>{this.props.background}</h3>
                                    <h6 style={{ color: "grey" }}>Background</h6>
                                </div>
                                <div className="Preview_Alignment">
                                    <h3>{this.props.alignment}</h3>
                                    <h6 style={{ color: "grey" }}>Alignment</h6>
                                </div>
                            </div>
                        </div>

                            <h2 >Ability Scores</h2>
                        <div className="Preview_Ability_Scores">
                            <div className="Preview_str">
                                <h3>{this.props.str}</h3>
                                <h6 style={{ color: 'grey' }} >Str</h6>
                            </div>
                            <div className="Preview_dex">
                                <h3>{this.props.dex}</h3>
                                <h6 style={{ color: 'grey' }} >Dex</h6>
                            </div>
                            <div className="Preview_con">
                                <h3>{this.props.con}</h3>
                                <h6 style={{ color: 'grey' }} >const</h6>
                            </div>
                            <div className="Preview_wis">
                                <h3>{this.props.wis}</h3>
                                <h6 style={{ color: 'grey' }} >Wis</h6>
                            </div>
                            <div className="Preview_int">
                                <h3>{this.props.int}</h3>
                                <h6 style={{ color: 'grey' }} >Int</h6>
                            </div>
                            <div className="Preview_cha">
                                <h3>{this.props.cha}</h3>
                                <h6 style={{ color: 'grey' }} >Cha</h6>
                            </div>
                        </div>
                        <div className="Preview_Hitdie_HP_Speed">
                            <div className="Preview_hitdie">
                                <h3>1D {this.props.hit_die}</h3>
                                <h6 style={{ color: 'grey' }} >Hit Die</h6>
                            </div>
                            <div className="Preview_HP">
                                <h3>{this.props.hit_die ? Math.floor((this.props.con - 10) / 2) + this.props.hit_die : null}</h3>
                                <h6 style={{ color: 'grey' }}>Hit Points</h6>
                            </div>
                            <div className="Preview_Speed">
                                <h3>{this.props.speed}</h3>
                                <h6 style={{ color: 'grey' }}>speed</h6>
                            </div>

                        </div>
                            <h6 style={{color: 'grey'}}>Profecient Skills</h6>
                        <div className="Preview_Skills_Container">
                            {keys.length > 0 ? keys.map(el => (
                                <h3 key={el}>{el}</h3>)
                            ) : null}
                        </div>
                    </div>
                    <div className="Preview_Button_container">

                        <Link to="/home">
                            <button onClick={this.addToDatabase} className="Abilitypoints_Navigation" >Submit</button>
                        </Link>
                        <Link to="/adventureleague/skills">
                            <button className="Abilitypoints_Navigation">Previous</button>
                        </Link>
                        <Link to="/home">
                            <button className="Abilitypoints_Navigation" >Cancel</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}



function mapStateToProps(state) {
    const { user_id, characterName, playerName, classinfo, raceinfo, background, alignment, str, dex, wis, int, cha, con, acrobatics, arcana, animal_handling, athletics, deception, history, insight, intimidation, investigation, medicine, nature, perception, performance, persuassion, religion, sleight_of_hand, stealth, survival, hit_die, speed } = state
    return { user_id, characterName, playerName, classinfo, raceinfo, background, alignment, str, dex, wis, int, cha, con, acrobatics, arcana, animal_handling, athletics, deception, history, insight, intimidation, investigation, medicine, nature, perception, performance, persuassion, religion, sleight_of_hand, stealth, survival, hit_die, speed }
}

export default connect(mapStateToProps,
    { setUser })(Preview);
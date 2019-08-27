import React, { Component } from "react"
import axios from "axios"
import { setUser } from "../../../../ducks/reducer"
import { connect } from "react-redux"
import "./Equipment.css"
import { Link } from "react-router-dom"


class Equipment extends Component {
    state = {
        equipment: null,
        choices: 0,
        opt1cho1: true,
        opt1cho2: false,
        opt2cho1: false,
        opt2cho2: false,
        opt3cho1: true,
        opt3cho2: false,


    }

    componentDidMount() {
        // const url = this.props.classinfo[0].starting_equipment.url
        // axios.get(`${url}`).then(res=>{
        axios.get(this.props.startingequipment).then(res => {
            const equipment = res.data
            const choices = res.data.choices_to_make
            this.setState({
                equipment,
                choices,
            })
        })
    }
    optionOne(key,e) {
        if (e === true) {
            this.setState()
        }
        this.setState({
            [key]: !e
        })
    }


    render() {
        const { equipment, choices} = this.state
        console.log(choices)
        console.log(equipment)
        return (
            <div className="Equipment_Outer">
                <div className="Equipment_main">
                    <div className="Equipment_Container">
                        {choices > 0 ? <div className="Equipment_Select_1">
                            <div className="Equipment_Select_Styling">
                                <input onClick={()=>{this.optionOne("opt1cho1", this.state.opt1cho1)}} type="checkbox" defaultChecked/>
                                <h4>{equipment.choice_1[0].from[0].item.name}</h4>
                                <input onClick={()=>{this.optionOne("opt2cho1", this.state.opt2cho1)}} type="checkbox" />
                                <select name="" id="">
                                    {equipment.choice_1[1].from.map(el => (
                                        <option key={el.item.name} value={el.item.name}>{el.item.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div> : null}
                        {choices > 1 ? <div className="Equipment_Select_2">
                            <div className="Equipment_Select_Styling">
                                <input type="radio" />
                                <h4>{equipment.choice_2[0].from[0].item.name}</h4>
                                <input type="radio" />
                                <select name="" id="">
                                    {equipment.choice_2[1].from.map(el => (
                                        <option key={el.item.name} value={el.item.name}>{el.item.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div> : null}
                        {choices > 2 ? <div className="Equipment_Select_3">
                            <div className="Equipment_Select_Styling">
                                <input type="radio" />
                                <h4>{equipment.choice_3[0].from[0].item.name}</h4>
                                <input type="radio" />
                                <select name="" id="">
                                    {equipment.choice_3[1].from.map(el => (
                                        <option key={el.item} value={el.item.name}>{el.item.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div> : null}
                    </div>

                    <div className="Equipment_Button_container">
                        <Link to="/adventureleague/preview">
                            <button onClick={this.saveStepTwo} className="Abilitypoints_Navigation" >Next</button>
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
    const { classinfo, classurl, raceurl, startingequipment } = state
    return { classinfo, classurl, raceurl, startingequipment }
}

export default connect(mapStateToProps,
    { setUser })(Equipment);
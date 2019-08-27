import React, { Component } from "react"
// import axios from "axios"
import { setUser } from "../../../../ducks/reducer"
import { connect } from "react-redux"
import "./Edit.css"
import { Link } from "react-router-dom"
import axios from "axios";


class Edit extends Component {
    state = {
        sheetinfo: {}
    }
    componentDidMount = async () => {
        let sheetinfo = await axios.get(`/api/sheets/edit/${this.props.match.params.sheet_id}`)
        sheetinfo = sheetinfo.data[0]
        this.setState({ sheetinfo })
    }

    handleChange(e, key) {
        let ugly = {...this.state.sheetinfo}
        ugly[key] = +e
        this.setState({
            sheetinfo: {...ugly}
        })
    }

    checkboxHandleChange(e, key) {
        let ugly = {...this.state.sheetinfo}
        ugly[key] =!e
        this.setState({
            sheetinfo: {...ugly}
        })
    }
    submitEdit =() => {
        const {sheetinfo} = this.state
        console.log(sheetinfo)
        axios.put(`api/sheets/${sheetinfo.sheet_id}`, sheetinfo)
        .then(()=>{
            this.props.history.push("/home")
        })
    }

    render() {
        const { sheetinfo } = this.state
        return (
            <div className="Edit_Outer">
                <div className="Edit_main">
                    <div className="Edit_Sheet">
                        <div className="Edit_Header">
                            <div className="Edit_Character_Name">
                                <input onChange={(e=>{this.handleChange(e.target.value,"character_name")})} className="Edit_Inputs" type="text" name={sheetinfo.character_name} placeholder={sheetinfo.character_name} />
                            </div>
                            <div className="Edit_Character_Info">
                                <div className="Edit_Character_Info_Box">
                                    <input onChange={(e=>{this.handleChange(e.target.value,"class")})} className="Edit_Inputs" type="text" name={sheetinfo.class} placeholder={sheetinfo.class} />
                                </div>
                                <div className="Edit_Character_Info_Box">
                                    <input onChange={(e=>{this.handleChange(e.target.value,"race")})} className="Edit_Inputs" type="text" name={sheetinfo.race} placeholder={sheetinfo.race} />
                                </div>
                                <div className="Edit_Character_Info_Box">
                                    <input onChange={(e=>{this.handleChange(e.target.value,"playername")})} className="Edit_Inputs" type="text" name={sheetinfo.playername} placeholder={sheetinfo.playername} />
                                </div>
                                <div className="Edit_Character_Info_Box">
                                    <input onChange={(e=>{this.handleChange(e.target.value,"background")})} className="Edit_Inputs" type="text" name={sheetinfo.background} placeholder={sheetinfo.background} />
                                </div>
                                <div className="Edit_Character_Info_Box">
                                    <input onChange={(e=>{this.handleChange(e.target.value,"alignment")})} className="Edit_Inputs" type="text" name={sheetinfo.alignment} placeholder={sheetinfo.alignment} />
                                </div>
                                <div className="Edit_Character_Info_Box">
                                    Exp: 0
                                </div>
                            </div>
                        </div>
                        <div className="Edit_Main_Body">
                            <div className="Three_Pillars_First">
                                <div className='Edit_Ability_skills'>
                                    <div className="Edit_Abilitypoints_Column">
                                        <div className="Edit_Ability">
                                            <h6>strength</h6>
                                            <input onChange={(e=>{this.handleChange(e.target.value,"strength")})} className="Edit_Inputs" type="text" name={sheetinfo.strength} placeholder={sheetinfo.strength} />
                                        </div>
                                        <div  className="Edit_Ability">
                                            <h6>dexterity</h6>
                                            <input onChange={(e=>{this.handleChange(e.target.value,"dexterity")})} className="Edit_Inputs" type="text" name={sheetinfo.dexterity} placeholder={sheetinfo.dexterity} />
                                        </div>
                                        <div className="Edit_Ability">
                                            <h6>wisdom</h6>
                                            <input onChange={(e=>{this.handleChange(e.target.value,"wisdom")})} className="Edit_Inputs" type="text" name={sheetinfo.wisdom} placeholder={sheetinfo.wisdom} />
                                        </div>
                                        <div className="Edit_Ability">
                                            <h6>intelligence</h6>
                                            <input onChange={(e=>{this.handleChange(e.target.value,"intelligence")})} className="Edit_Inputs" type="text" name={sheetinfo.intelligence} placeholder={sheetinfo.intelligence} />
                                        </div>
                                        <div className="Edit_Ability">
                                            <h6>charisma</h6>
                                            <input onChange={(e=>{this.handleChange(e.target.value,"charisma")})} className="Edit_Inputs" type="text" name={sheetinfo.charisma} placeholder={sheetinfo.charisma} />
                                        </div>
                                        <div className="Edit_Ability">
                                            <h6>constitution</h6>
                                            <input onChange={(e=>{this.handleChange(e.target.value,"constitution")})} className="Edit_Inputs" type="text" name={sheetinfo.constitution} placeholder={sheetinfo.constitution} />
                                        </div>
                                    </div>
                                    <div className="Edit_Skills_Column_Second">
                                        <div className="Edit_Inspiration"></div>
                                        <div className="Edit_Profeciency_Bonus"></div>
                                        <div className="Edit_Saving_Throws"></div>

                                    </div>
                                </div>
                                <div className="Edit_Passive_Perception"></div>
                                <div className="Edit_Other_Profeciencies"></div>

                            </div>
                            <div className="Three_Pillars">
                                <div className="Edit_Middle_One"></div>
                                <div className="Edit_Middle_Two"></div>
                                <div className="Edit_Middle_Three"></div>
                                <div className="Edit_Middle_Four"></div>
                                <div className="Edit_Middle_Five"></div>
                            </div>
                            <div className="Three_Pillars">
                                <div className="Edit_Skills">
                                    <div className="Edit_Skills_Checkbox">
                                    <input onChange={(e) => { this.checkboxHandleChange(sheetinfo.acrobatics, "acrobatics") }} checked={sheetinfo.acrobatics} className="Edit_Checkbox" type="checkbox" name="acrobatics" />
                                    <label htmlFor="acrobatics" >acrobatics</label>
                                </div>
                                <div className="Edit_Skills_Checkbox" >
                                    <input onChange={(e) => { this.checkboxHandleChange(sheetinfo.animal_handling, "animal_handling") }} className="Edit_Checkbox" checked={sheetinfo.animal_handling} type="checkbox" name="animal_handling" />
                                    <label htmlFor="animal_handling" >animal H</label>
                                </div>
                                <div className="Edit_Skills_Checkbox" >
                                    <input onChange={(e) => { this.checkboxHandleChange(sheetinfo.arcana, "arcana") }} className="Edit_Checkbox" checked={sheetinfo.arcana} type="checkbox" name="arcana" />
                                    <label htmlFor="arcana" >arcana</label>
                                </div>
                                <div className="Edit_Skills_Checkbox" >
                                    <input onChange={(e) => { this.checkboxHandleChange(sheetinfo.athletics, "athletics") }} className="Edit_Checkbox" checked={sheetinfo.athletics} type="checkbox" name="athletics" />
                                    <label htmlFor="athletics" >athletics</label>
                                </div>
                                <div className="Edit_Skills_Checkbox" >
                                    <input onChange={(e) => { this.checkboxHandleChange(sheetinfo.deception, "deception") }} className="Edit_Checkbox" checked={sheetinfo.deception} type="checkbox" name="deception" />
                                    <label htmlFor="deception" >deception</label>
                                </div>
                                <div className="Edit_Skills_Checkbox" >
                                    <input onChange={(e) => { this.checkboxHandleChange(sheetinfo.history, "history") }} className="Edit_Checkbox" checked={sheetinfo.history} type="checkbox" name="History" />
                                    <label htmlFor="History" >History</label>
                                </div>
                                <div className="Edit_Skills_Checkbox" >
                                    <input onChange={(e) => { this.checkboxHandleChange(sheetinfo.insight, "insight") }} className="Edit_Checkbox" checked={sheetinfo.insight} type="checkbox" name="insight" />
                                    <label htmlFor="insight" >insight</label>
                                </div>
                                <div className="Edit_Skills_Checkbox" >
                                    <input onChange={(e) => { this.checkboxHandleChange(sheetinfo.intimidation, "intimidation") }} className="Edit_Checkbox" checked={sheetinfo.intimidation} type="checkbox" name="intimidation" />
                                    <label htmlFor="intimidation" >intimidation</label>
                                </div>
                                <div className="Edit_Skills_Checkbox" >
                                    <input onChange={(e) => { this.checkboxHandleChange(sheetinfo.investigation, "investigation") }} className="Edit_Checkbox" checked={sheetinfo.investigation} type="checkbox" name="investigation" />
                                    <label htmlFor="investigation" >investigation</label>
                                </div>
                                <div className="Edit_Skills_Checkbox" >
                                    <input onChange={(e) => { this.checkboxHandleChange(sheetinfo.medicine, "medicine") }} className="Edit_Checkbox" checked={sheetinfo.medicine} type="checkbox" name="Medicine" />
                                    <label htmlFor="Medicine" >Medicine</label>
                                </div>
                                <div className="Edit_Skills_Checkbox" >
                                    <input onChange={(e) => { this.checkboxHandleChange(sheetinfo.nature, "nature") }} className="Edit_Checkbox" checked={sheetinfo.nature} type="checkbox" name="Nature" />
                                    <label htmlFor="Nature" >Nature</label>
                                </div>
                                <div className="Edit_Skills_Checkbox" >
                                    <input onChange={(e) => { this.checkboxHandleChange(sheetinfo.perception, "perception") }} className="Edit_Checkbox" checked={sheetinfo.perception} type="checkbox" name="Perception" />
                                    <label htmlFor="Perception" >Perception</label>
                                </div>
                                <div className="Edit_Skills_Checkbox" >
                                    <input onChange={(e) => { this.checkboxHandleChange(sheetinfo.performance, "performance") }} className="Edit_Checkbox" checked={sheetinfo.performance} type="checkbox" name="performance" />
                                    <label htmlFor="performance" >performance</label>
                                </div>
                                <div className="Edit_Skills_Checkbox" >
                                    <input onChange={(e) => { this.checkboxHandleChange(sheetinfo.persuassion, "persuassion") }} className="Edit_Checkbox" checked={sheetinfo.persuassion} type="checkbox" name="persuassion" />
                                    <label htmlFor="persuassion" >persuasion</label>
                                </div>
                                <div className="Edit_Skills_Checkbox" >
                                    <input onChange={(e) => { this.checkboxHandleChange(sheetinfo.religion, "religion") }} className="Edit_Checkbox" checked={sheetinfo.religion} type="checkbox" name="religion" />
                                    <label htmlFor="religion" >religion</label>
                                </div>
                                <div className="Edit_Skills_Checkbox" >
                                    <input onChange={(e) => { this.checkboxHandleChange(sheetinfo.sleight_of_hand, "sleight_of_hand") }} className="Edit_Checkbox" checked={sheetinfo.sleight_of_hand} type="checkbox" name="sleight_of_hand" />
                                    <label htmlFor="sleight_of_hand" >sleight</label>
                                </div>
                                <div className="Edit_Skills_Checkbox" >
                                    <input onChange={(e) => { this.checkboxHandleChange(sheetinfo.stealth, "stealth") }} className="Edit_Checkbox" checked={sheetinfo.stealth} type="checkbox" name="stealth" />
                                    <label htmlFor="stealth" >stealth</label>
                                </div>
                                <div className="Edit_Skills_Checkbox" >
                                    <input onChange={(e) => { this.checkboxHandleChange(sheetinfo.survival, "survival") }} className="Edit_Checkbox" checked={sheetinfo.survival} type="checkbox" name="survival" />
                                    <label htmlFor="survival" >survival</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Skills_Button_container">
                        <Link to="/home">
                            <button className="Abilitypoints_Navigation" >Cancel</button>
                        </Link>
                        <Link to="/home">
                            <button onClick={this.submitEdit} className="Abilitypoints_Navigation" >Submit</button>
                        </Link>
                    </div>
                </div>
            </div>
            </div >
        )
    }
}

function mapStateToProps(state) {
    const { playerClass } = state
    return { playerClass }
}

export default connect(mapStateToProps,
    { setUser })(Edit);
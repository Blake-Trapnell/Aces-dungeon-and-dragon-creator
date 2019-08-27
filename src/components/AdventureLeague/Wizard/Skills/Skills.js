import React, { Component } from "react"
import axios from "axios"
import { setUser, setWizardStepThree } from "../../../../ducks/reducer"
import { connect } from "react-redux"
import "./skills.css"
import { Link } from "react-router-dom"


class Skills extends Component {
    state = {
        chosenSkills: null,
        availableSkills: null,
        amountOfSkills: 2,
        acrobatics: false,
        arcana: false,
        animal_handling: false,
        athletics: false,
        deception: false,
        history: false,
        insight: false,
        intimidation: false,
        investigation: false,
        medicine: false,
        nature: false,
        perception: false,
        performance: false,
        persuassion: false,
        religion: false,
        sleight_of_hand: false,
        stealth: false,
        survival: false,
    }

    componentDidMount() {
        this.loadPage()
        this.aosUpdate(this.props.classinfo[0].name)
    }

    loadPage = async () => {
        const classname = this.props.classinfo[0].name
        let classSkills = await axios.get(`/api/sheets/skills/${classname}`)
        let backgroundSkills = await axios.get(`/api/sheets/backgroundskills/${this.props.background}`)
        classSkills = classSkills.data
        backgroundSkills = backgroundSkills.data
        for (let i = 0; i < classSkills.length; i++) {
            if (classSkills[i].skill === backgroundSkills[0].skill || classSkills[i].skill === backgroundSkills[1].skill) {
                classSkills.splice(i, 1)
            }
        }
        backgroundSkills.map(el => {
            el.skill = el.skill.toLowerCase()
            this.setState({
                [el.skill]: true
            })
            return el
        })
        this.setState({
            availableSkills: classSkills,
            chosenSkills: backgroundSkills,
        })
    }
    aosUpdate(playerClass) {
        switch (playerClass) {
            case "Rogue":
                this.setState({
                    amountOfSkills: 4
                })
                return
            case "Ranger":
                this.setState({
                    amountOfSkills: 3
                })
                return
            case "Bard":
                this.setState({
                    amountOfSkills: 3
                })
                return
            default:
                return
        }
    }


    handleChange(e) {
        if (this.state.amountOfSkills === 0) {
            alert('No skill points remain')
            return
        }
        const { amountOfSkills } = this.state
        let newamountofskills = amountOfSkills
        switch (e.target.name) {
            case "Acrobatics":
                let acrobatics = !this.state.acrobatics
                if (this.state.acrobatics === true) {
                    newamountofskills = amountOfSkills + 1
                    this.setState({ amountOfSkills: newamountofskills, acrobatics })
                    return
                }
                else {
                    newamountofskills = amountOfSkills - 1
                    this.setState({ amountOfSkills: newamountofskills, acrobatics })
                }
                return
            case "animal_handling":
                const animal_handling = !this.state.animal_handling
                if (this.state.animal_handling === true) {
                    newamountofskills = amountOfSkills + 1
                    this.setState({ amountOfSkills: newamountofskills, animal_handling })
                    return
                }
                else {
                    newamountofskills = amountOfSkills - 1
                    this.setState({ amountOfSkills: newamountofskills, animal_handling })
                }
                return
            case "Arcana":
                const arcana = !this.state.arcana
                if (this.state.arcana === true) {
                    newamountofskills = amountOfSkills + 1
                    this.setState({ amountOfSkills: newamountofskills, arcana })
                    return
                }
                else {
                    newamountofskills = amountOfSkills - 1
                    this.setState({ amountOfSkills: newamountofskills, arcana })
                }
                return
            case "Athletics":
                const athletics = !this.state.athletics
                if (this.state.athletics === true) {
                    newamountofskills = amountOfSkills + 1
                    this.setState({ amountOfSkills: newamountofskills, athletics })
                    return
                }
                else {
                    newamountofskills = amountOfSkills - 1
                    this.setState({ amountOfSkills: newamountofskills, athletics })
                }
                return
            case "deception":
                const deception = !this.state.deception
                if (this.state.deception === true) {
                    newamountofskills = amountOfSkills + 1
                    this.setState({ amountOfSkills: newamountofskills, deception })
                    return
                }
                else {
                    newamountofskills = amountOfSkills - 1
                    this.setState({ amountOfSkills: newamountofskills, deception })
                }
                return
            case "history":
                const history = !this.state.history
                if (this.state.history === true) {
                    newamountofskills = amountOfSkills + 1
                    this.setState({ amountOfSkills: newamountofskills, history })
                    return
                }
                else {
                    newamountofskills = amountOfSkills - 1
                    this.setState({ amountOfSkills: newamountofskills, history })
                }
                return
            case "insight":
                const insight = !this.state.insight
                if (this.state.insight === true) {
                    newamountofskills = amountOfSkills + 1
                    this.setState({ amountOfSkills: newamountofskills, insight })
                    return
                }
                else {
                    newamountofskills = amountOfSkills - 1
                    this.setState({ amountOfSkills: newamountofskills, insight })
                }
                return
            case "intimidation":
                const intimidation = !this.state.intimidation
                if (this.state.intimidation === true) {
                    newamountofskills = amountOfSkills + 1
                    this.setState({ amountOfSkills: newamountofskills, intimidation })
                    return
                }
                else {
                    newamountofskills = amountOfSkills - 1
                    this.setState({ amountOfSkills: newamountofskills, intimidation })
                }
                return
            case "investigation":
                const investigation = !this.state.investigation
                if (this.state.investigation === true) {
                    newamountofskills = amountOfSkills + 1
                    this.setState({ amountOfSkills: newamountofskills, investigation })
                    return
                }
                else {
                    newamountofskills = amountOfSkills - 1
                    this.setState({ amountOfSkills: newamountofskills, investigation })
                }
                return
            case "medicine":
                const medicine = !this.state.medicine
                if (this.state.medicine === true) {
                    newamountofskills = amountOfSkills + 1
                    this.setState({ amountOfSkills: newamountofskills, medicine })
                    return
                }
                else {
                    newamountofskills = amountOfSkills - 1
                    this.setState({ amountOfSkills: newamountofskills, medicine })
                }
                return
            case "nature":
                const nature = !this.state.nature
                if (this.state.nature === true) {
                    newamountofskills = amountOfSkills + 1
                    this.setState({ amountOfSkills: newamountofskills, nature })
                    return
                }
                else {
                    newamountofskills = amountOfSkills - 1
                    this.setState({ amountOfSkills: newamountofskills, nature })
                }
                return
            case "perception":
                const perception = !this.state.perc
                if (this.state.perception === true) {
                    newamountofskills = amountOfSkills + 1
                    this.setState({ amountOfSkills: newamountofskills, perception })
                    return
                }
                else {
                    newamountofskills = amountOfSkills - 1
                    this.setState({ amountOfSkills: newamountofskills, perception })
                }
                return
            case "performance":
                const performance = !this.state.performance
                if (this.state.performance === true) {
                    newamountofskills = amountOfSkills + 1
                    this.setState({ amountOfSkills: newamountofskills, performance })
                    return
                }
                else {
                    newamountofskills = amountOfSkills - 1
                    this.setState({ amountOfSkills: newamountofskills, performance })
                }
                return
            case "persuassion":
                const persuassion = !this.state.persuassion
                if (this.state.persuassion === true) {
                    newamountofskills = amountOfSkills + 1
                    this.setState({ amountOfSkills: newamountofskills, persuassion })
                    return
                }
                else {
                    newamountofskills = amountOfSkills - 1
                    this.setState({ amountOfSkills: newamountofskills, persuassion })
                }
                return
            case "religion":
                const religion = !this.state.religion
                if (this.state.religion === true) {
                    newamountofskills = amountOfSkills + 1
                    this.setState({ amountOfSkills: newamountofskills, religion })
                    return
                }
                else {
                    newamountofskills = amountOfSkills - 1
                    this.setState({ amountOfSkills: newamountofskills, religion })
                }
                return
            case "sleight_of_hand":
                const sleight_of_hand = !this.state.sleight_of_hand
                if (this.state.sleight_of_hand === true) {
                    newamountofskills = amountOfSkills + 1
                    this.setState({ amountOfSkills: newamountofskills, sleight_of_hand })
                    return
                }
                else {
                    newamountofskills = amountOfSkills - 1
                    this.setState({ amountOfSkills: newamountofskills, sleight_of_hand })
                }
                return
            case "stealth":
                const stealth = !this.state.stealth
                if (this.state.stealth === true) {
                    newamountofskills = amountOfSkills + 1
                    this.setState({ amountOfSkills: newamountofskills, stealth })
                    return
                }
                else {
                    newamountofskills = amountOfSkills - 1
                    this.setState({ amountOfSkills: newamountofskills, stealth })
                }
                return
            case "survival":
                const survival = !this.state.survival
                if (this.state.survival === true) {
                    newamountofskills = amountOfSkills + 1
                    this.setState({ amountOfSkills: newamountofskills, survival })
                    return
                }
                else {
                    newamountofskills = amountOfSkills - 1
                    this.setState({ amountOfSkills: newamountofskills, survival })
                }
                return
            default:
                return
        }
    }

    saveStepThree = () => {

        const { acrobatics, arcana, animal_handling, athletics, deception, history, insight, intimidation, investigation, medicine,
            nature, perception, performance, persuassion, religion, sleight_of_hand, stealth, survival } = this.state
        this.props.setWizardStepThree({
            acrobatics, arcana, animal_handling, athletics, deception, history, insight, intimidation, investigation, medicine,
            nature, perception, performance, persuassion, religion, sleight_of_hand, stealth, survival
        })
    }


    render() {
        const { availableSkills, } = this.state
        return (
            <div className="Skills_Outer">
                <div className="Skills_main">
                    <div className="Skills_Checkbox_Container" >
                        {availableSkills ?
                            availableSkills.map(el => (
                                <div className="Skills_Checkbox_Text" key={el.skill}>
                                    <input onChange={(e) => this.handleChange(e)} id="Skills_Checkbox" type="checkbox" name={el.skill} />
                                    <label htmlFor={el.skill} >{el.skill}</label>
                                </div>
                            ))
                            :
                            <h4>Loading...</h4>
                        }
                    </div>
                    <div className="Skills_Points_remaining">
                        <div className="SPR">
                            <h4>Skill Points Remaining {this.state.amountOfSkills}</h4>
                        </div>

                    <div className="Skills_Button_container">
                        <Link to="/home">
                            <button className="Abilitypoints_Navigation" >Cancel</button>
                        </Link>
                        <Link to="/adventureleague/abilitypoints">
                            <button className="Abilitypoints_Navigation">Previous</button>
                        </Link>
                        <Link to="/adventureleague/preview">
                            <button onClick={this.saveStepThree} className="Abilitypoints_Navigation" >Next</button>
                        </Link>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { user_id, classinfo, raceinfo, background } = state
    return { user_id, classinfo, raceinfo, background }
}

export default connect(mapStateToProps,
    { setUser, setWizardStepThree })(Skills);
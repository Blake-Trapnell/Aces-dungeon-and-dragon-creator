import React, { Component } from "react"
import axios from "axios"
import { setUser, setWizardStepOne } from "../../../../ducks/reducer"
import { connect } from "react-redux"
import "./ClassAndRace.css"
import { Link } from "react-router-dom"
import ToggleDisplay from "react-toggle-display"


class RaceAndClass extends Component {
    state = {
        characterName: '',
        playerName: '',
        race: 1,
        playerClass: 1,
        alignment: 'Alignment',
        background: 'Background',
        classinfo: [],
        raceinfo: [],
        displayClassInfo: false,
        displayRaceInfo: false,
        classurl: '',
        raceurl: '',
    }

    componentDidMount = async () => {
        const res = await axios.get(`http://www.dnd5eapi.co/api/classes/1`)
        const result = await axios.get(`http://www.dnd5eapi.co/api/races/1`)
        const classinfo = [res.data]
        const raceinfo = [result.data]

        this.setState({
            classinfo,
            raceinfo
        })
    }
    componentDidUpdate() {
        const { characterName, playerName, classinfo, raceinfo, alignment, background } = this.state
        this.props.setWizardStepOne({ classinfo, background, alignment, raceinfo, characterName, playerName })
    }

    classChange(key, e) {
        if(e !== "Class") {

            axios.get(`http://www.dnd5eapi.co/api/classes/${e}`).then(res => {
                const classinfo = [res.data]
                this.setState({
                    [key]: e,
                    classinfo,
                    startingequipment: `http://www.dnd5eapi.co/api/startingequipment/${e}`
                })
            })
        }
        else {
            this.setState({
                [key]: e
            })
        }
    }
    raceChange(key, e) {
        if (e !== "Race") {

            axios.get(`http://www.dnd5eapi.co/api/races/${e}`).then(res => {
                const raceinfo = [res.data]
                this.setState({
                    [key]: e,
                    raceinfo
                })
            })
        }
        else{
            this.setState({[key]: e})
        }
    }
    handleChange(key, e) {
        this.setState({
            [key]: e,
        })
    }
    displayClassInfo = () => {
        let { displayClassInfo, displayRaceInfo } = this.state
        if (displayClassInfo === true) {
            displayClassInfo = !displayClassInfo
            this.setState({
                displayClassInfo
            })
        }
        else {
            displayClassInfo = !displayClassInfo
            this.setState({
                displayClassInfo
            })
            if (displayRaceInfo === true) {
                displayRaceInfo = !displayRaceInfo
                this.setState({
                    displayRaceInfo
                })
            }
        }
    }
    displayRaceInfo = () => {
        let { displayRaceInfo, displayClassInfo } = this.state
        if (displayRaceInfo === true) {
            displayRaceInfo = !displayRaceInfo
            this.setState({
                displayRaceInfo
            })
        }
        else {
            displayRaceInfo = !displayRaceInfo
            this.setState({
                displayRaceInfo
            })
            if (displayClassInfo === true) {
                displayClassInfo = !displayClassInfo
                this.setState({
                    displayClassInfo
                })
            }
        }
    }


    saveStepOne = () => {
        if( this.state.background === "Background") {
            alert("Please select background")
            return
        }
        if( this.state.alignment === "Alignment") {
            alert("Please select Alignment")
            return
        }
        if(this.state.playerClass === "Class") {
            alert("Please select Class")
            return
        }
        if(this.state.race === "Race") {
            alert("please select Race")
            return
        }
        const { hit_die } = this.state.classinfo[0]
        const { speed } = this.state.raceinfo[0]
        const { characterName, playerName, classinfo, raceinfo, alignment, background, startingequipment } = this.state
        this.props.setWizardStepOne({ classinfo, background, alignment, raceinfo, characterName, playerName, speed, hit_die, startingequipment })
        this.props.history.push("/adventureleague/abilitypoints")
    }

    render() {
        return (
            <div className="Adventure_Outer">
                <div className="Adventure_main">
                    <div className="Adventure_Info_Display">
                        <select className="Adventure_Inputs" onChange={e => this.classChange("playerClass", e.target.value)} name="Class" id="Class">
                            <option value="Class">Class</option>
                            <option value="1">Barbarian</option>
                            <option value="2">Bard</option>
                            <option value="3">Cleric</option>
                            <option value="4">Druid</option>
                            <option value="5">Fighter</option>
                            <option value="6">Monk</option>
                            <option value="7">Paladin</option>
                            <option value="8">Ranger</option>
                            <option value="9">Rogue</option>
                            <option value="10">Sorcerer</option>
                            <option value="11">Warlock</option>
                            <option value="12">Wizard</option>
                        </select>
                        <button onClick={this.displayClassInfo} className="Adventure_Button" >Class Info</button>
                        <ToggleDisplay show={this.state.displayClassInfo}>
                            <div className=".Adventure_Middle">
                                {this.state.classinfo.map(el =>
                                    <div key={el._id}>
                                        <h3 style ={{margin: "5px"}}>{el.name}</h3>
                                        <h4 style ={{margin: "5px"}}>Hit die: {el.hit_die}</h4>
                                        <h3 style ={{margin: "5px"}}>Saving Throws:</h3>
                                        {el.saving_throws.map(el =>
                                            <h5 key={el.name}>{el.name}</h5>
                                        )}
                                        <h3 style ={{margin: "5px"}}>Profecencies:</h3>
                                        <div className="Adventure_Profs">
                                            {el.proficiencies.map(el =>
                                                <h5 key={el.name} className="Adventure_individual_profs" >{el.name}</h5>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </ToggleDisplay>
                        <select className="Adventure_Inputs" name="Race" id="Race" onChange={e => this.raceChange("race", e.target.value)}>
                            <option value="Race">Race</option>
                            <option value="1">Dwarf</option>
                            <option value="2">Elf</option>
                            <option value="3">Halfing</option>
                            <option value="4">Human</option>
                            <option value="5">Dragonborn</option>
                            <option value="6">Gnome</option>
                            <option value="7">Half-Elf</option>
                            <option value="8">Half-Orc</option>
                            <option value="9">Tiefling</option>
                        </select>
                        <button onClick={this.displayRaceInfo} className="Adventure_Button" >Race Info</button>
                        <ToggleDisplay show={this.state.displayRaceInfo}>
                            <div className=".Adventure_Middle">
                                {this.state.raceinfo.map(el =>
                                    <div key={el.name}>
                                        <h3 style ={{margin: "5px"}}>{el.name}</h3>
                                        <h4 style ={{margin: "5px"}}>speed: {el.speed}ft</h4>
                                        <h4 style ={{margin: "5px"}}>Bonuses: str: +{el.ability_bonuses[0]} dex: +{el.ability_bonuses[1]} wis: +{el.ability_bonuses[2]} int: +{el.ability_bonuses[3]} cha: +{el.ability_bonuses[4]} con: +{el.ability_bonuses[6]}
                                        </h4>
                                    </div>
                                )}
                            </div>
                        </ToggleDisplay>
                        <ToggleDisplay show={!this.state.displayClassInfo}>
                            <select className="Adventure_Inputs" onChange={e => this.handleChange("background", e.target.value)} name="Background" id="Background">
                            <option value="Background">Background</option>
                                <option value="acoylte">Acoylte</option>
                                <option value="charlatan">Charlatan</option>
                                <option value="criminal_spy">Criminal / Spy</option>
                                <option value="entertainer">Entertainer</option>
                                <option value="folk_Hero">Folk Hero</option>
                                <option value="guild_Artisan">Guild Artisan</option>
                                <option value="hermit">Hermit</option>
                                <option value="noble">Noble</option>
                                <option value="outlander">Outlander</option>
                                <option value="sage">Sage</option>
                                <option value="sailor">Sailor</option>
                                <option value="soldier">Soldier</option>
                                <option value="urchin">Urchin</option>
                            </select>
                        </ToggleDisplay>
                        <select className="Adventure_Inputs" onChange={e => this.handleChange("alignment", e.target.value)} name="Alignment" id="Alignment">
                        <option value="Alignment">Alignment</option>
                            <option value="Lawful Good">Lawful Good</option>
                            <option value="Neutral Good">Neutral Good</option>
                            <option value="Chaotic Good">Chaotic Good</option>
                            <option value="Lawful Neutral">Lawful Neutral</option>
                            <option value="Neutral">Neutral</option>
                            <option value="Chaotic Neutral">Chaotic Neutral</option>
                            <option value="Lawful Evil">Lawful Evil</option>
                            <option value="Neutral Evil">Neutral Evil</option>
                            <option value="Chaotic Evil">Chaotic Evil</option>
                        </select>
                        <input className="Adventure_Inputs" onChange={e => this.handleChange("characterName", e.target.value)} type="text" placeholder="Character Name" id="Adventure_Input" />
                        <input className="Adventure_Inputs" onChange={e => this.handleChange("playerName", e.target.value)} type="text" placeholder="Player Name" id="Adventure_Input" />
                        <div className="Adventure_Button_Container">
                            <Link to="/home">
                                <button className="Adventure_Navigation" >Cancel</button>
                            </Link>
                            <button onClick={this.saveStepOne} className="Adventure_Navigation" >Next</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { raceinfo } = state
    return { raceinfo }
}

export default connect(mapStateToProps,
    { setUser, setWizardStepOne })(RaceAndClass);
import React, { Component } from "react"
import axios from "axios"
import { setUser } from "../../ducks/reducer"
import { connect } from "react-redux"
import "./Print.css"
import { Link } from "react-router-dom"
import { saveAs } from "file-saver"


class Print extends Component {
    state = {
        sheetinfo: {}
    }

    componentDidMount = async () => {
        let sheetinfo = await axios.get(`/api/sheets/print/${this.props.match.params.sheet_id}`)
        sheetinfo = sheetinfo.data[0]
        this.setState({ sheetinfo })
    }
    createAndDownloadPdf = async () => {
        const sheetinfo = this.state.sheetinfo
        const playerClass = sheetinfo.class
        sheetinfo.playerClass = playerClass
        let result = await axios.post('/create-pdf', sheetinfo)
        console.log(result)
        let res = await axios.get('/fetch-pdf', { responseType: 'blob' })
        const pdfBlob = new Blob([res.data], { type: 'application/pdf' })
        saveAs(pdfBlob, 'charactersheet.pdf')
    }

    render() {
        const { sheetinfo } = this.state
        return (
            <div>
                    <div className="Print_Outer">
                <h3 className="Charactername">{sheetinfo.character_name}</h3>
                <h4 className="PlayerClass">{sheetinfo.class}</h4>
                <h4 className="Background">{sheetinfo.background}</h4>
                <h4 className="Race">{sheetinfo.race}</h4>
                <h4 className="Playername">{sheetinfo.playername}</h4>
                <h4 className="Alignment">{sheetinfo.alignment}</h4>
                <div className="Ability_points">
                <div className="Strength">
                <h1 className="Strength">
                {sheetinfo.strength > 0 ? sheetinfo.strength: null}
                </h1>
                <h6 className="Strength">
                +{sheetinfo.strength > 0 ? Math.floor((sheetinfo.strength - 10) / 2): null}
                </h6>
                </div>
                <div className="Dexterity">
                <h1 className="Dexterity">
                {sheetinfo.dexterity > 0 ? sheetinfo.dexterity: null}
                </h1>
                <h6 className="Dexterity">
                +{sheetinfo.dexterity > 0 ? Math.floor((sheetinfo.dexterity - 10) / 2): null}
                </h6>
                </div>
                <div className="Constitution">
                <h1 className="Constitution">
                {sheetinfo.constitution > 0 ? sheetinfo.constitution: null}
                </h1>
                <h6 className="Constitution">
                +{ sheetinfo.constitution > 0 ? Math.floor((sheetinfo.constitution - 10) / 2) : null}
                </h6>
                </div>
                <div className="Intelligence">
                <h1 className="Intelligence">
                {sheetinfo.intelligence > 0 ? sheetinfo.intelligence: null}
                </h1>
                <h6 className="Intelligence">
                +{sheetinfo.intelligence > 0 ? Math.floor((sheetinfo.intelligence - 10) / 2): null}
                </h6>
                </div>
                <div className="Wisdom">
                <h1 className="Wisdom">
                {sheetinfo.wisdom > 0 ? sheetinfo.wisdom: null}
                </h1>
                <h6 className="Wisdom">
                +{sheetinfo.wisdom > 0 ? Math.floor((sheetinfo.wisdom - 10) / 2) : null}
                </h6>
                </div>
                <div className="Charisma">
                <h1 className="Charisma">
                {sheetinfo.charisma > 0 ? sheetinfo.charisma: null}
                </h1>
                <h6 className="Charisma">
                +{sheetinfo.charisma > 0 ? Math.floor((sheetinfo.charisma - 10) / 2): null}
                </h6>
                </div>
                </div>
                <h6 className="styled_h6">{sheetinfo.strength > 0 ? Math.floor((sheetinfo.dexterity - 10) / 2) :null}</h6>
                <h6 className="styled_h6">{sheetinfo.strength > 0 ? Math.floor((sheetinfo.wisdom - 10) / 2): null}</h6>
                <h6 className="styled_h6">{sheetinfo.strength > 0 ? Math.floor((sheetinfo.intelligence - 10) / 2): null}</h6>
                <h6 className="styled_h6">{sheetinfo.strength > 0 ? Math.floor((sheetinfo.strength - 10) / 2): null}</h6>
                <h6 className="styled_h6">{sheetinfo.strength > 0 ? Math.floor((sheetinfo.charisma - 10) / 2): null}</h6>
                <h6 className="styled_h6">{sheetinfo.strength > 0 ? Math.floor((sheetinfo.intelligence - 10) / 2): null}</h6>
                <h6 className="styled_h6">{sheetinfo.strength > 0 ? Math.floor((sheetinfo.wisdom - 10) / 2): null}</h6>
                <h6 className="styled_h6">{sheetinfo.strength > 0 ? Math.floor((sheetinfo.charisma - 10) / 2): null}</h6>
                <h6 className="styled_h6">{sheetinfo.strength > 0 ? Math.floor((sheetinfo.intelligence - 10) / 2): null}</h6>
                <h6 className="styled_h6">{sheetinfo.strength > 0 ? Math.floor((sheetinfo.wisdom - 10) / 2): null}</h6>
                <h6 className="styled_h6">{sheetinfo.strength > 0 ? Math.floor((sheetinfo.intelligence - 10) / 2): null}</h6>
                <h6 className="styled_h6">{sheetinfo.strength > 0 ? Math.floor((sheetinfo.wisdom - 10) / 2): null}</h6>
                <h6 className="styled_h6">{sheetinfo.strength > 0 ? Math.floor((sheetinfo.charisma - 10) / 2): null}</h6>
                <h6 className="styled_h6">{sheetinfo.strength > 0 ? Math.floor((sheetinfo.charisma - 10) / 2): null}</h6>
                <h6 className="styled_h6">{sheetinfo.strength > 0 ? Math.floor((sheetinfo.intelligence - 10) / 2): null}</h6>
                <h6 className="styled_h6">{sheetinfo.strength > 0 ? Math.floor((sheetinfo.dexterity - 10) / 2): null}</h6>
                <h6 className="styled_h6">{sheetinfo.strength > 0 ? Math.floor((sheetinfo.dexterity - 10) / 2): null}</h6>
                <h6 className="styled_h6">{sheetinfo.strength > 0 ? Math.floor((sheetinfo.wisdom - 10) / 2): null}</h6>
                
                <div style={{ backgroundColor: sheetinfo.acrobatics ? "green" : null }} className="style_h6_background" ></div>
                <div style={{ backgroundColor: sheetinfo.animal_handling ? "green" : null }} className="style_h6_background" ></div>
                <div style={{ backgroundColor: sheetinfo.arcana ? "green" : null }} className="style_h6_background" ></div>
                <div style={{ backgroundColor: sheetinfo.athletics ? "green" : null }} className="style_h6_background" ></div>
                <div style={{ backgroundColor: sheetinfo.deception ? "green" : null }} className="style_h6_background" ></div>
                <div style={{ backgroundColor: sheetinfo.history ? "green" : null }} className="style_h6_background" ></div>
                <div style={{ backgroundColor: sheetinfo.insight ? "green" : null }} className="style_h6_background" ></div>
                <div style={{ backgroundColor: sheetinfo.intimidation ? "green" : null }} className="style_h6_background" ></div>
                <div style={{ backgroundColor: sheetinfo.investigation ? "green" : null }} className="style_h6_background" ></div>
                <div style={{ backgroundColor: sheetinfo.medicine ? "green" : null }} className="style_h6_background" ></div>
                <div style={{ backgroundColor: sheetinfo.nature ? "green" : null }} className="style_h6_background" ></div>
                <div style={{ backgroundColor: sheetinfo.perception ? "green" : null }} className="style_h6_background" ></div>
                <div style={{ backgroundColor: sheetinfo.performance ? "green" : null }} className="style_h6_background" ></div>
                <div style={{ backgroundColor: sheetinfo.persuassion ? "green" : null }} className="style_h6_background" ></div>
                <div style={{ backgroundColor: sheetinfo.religion ? "green" : null }} className="style_h6_background" ></div>
                <div style={{ backgroundColor: sheetinfo.sleight_of_hand ? "green" : null }} className="style_h6_background" ></div>
                <div style={{ backgroundColor: sheetinfo.stealth ? "green" : null }} className="style_h6_background" ></div>
                <div style={{ backgroundColor: sheetinfo.survival ? "green" : null }} className="style_h6_background" ></div>
                
                <h3 className="Passive_Perception">{sheetinfo.strength > 0 ? Math.floor((sheetinfo.wisdom - 10) / 2 + 10): null}</h3>
                <h3 className="Proficiency_Bonus">+2</h3>
                
                <h6 className="Saving_Throws">+{sheetinfo.strength > 0 ? Math.floor((sheetinfo.strength - 10) / 2): null}</h6>
                <h6 className="Saving_Throws">+{sheetinfo.strength > 0 ? Math.floor((sheetinfo.dexterity - 10) / 2): null}</h6>
                <h6 className="Saving_Throws">+{sheetinfo.strength > 0 ? Math.floor((sheetinfo.constitution - 10) / 2): null}</h6>
                <h6 className="Saving_Throws">+{sheetinfo.strength > 0 ? Math.floor((sheetinfo.intelligence - 10) / 2): null}</h6>
                <h6 className="Saving_Throws">+{sheetinfo.strength > 0 ? Math.floor((sheetinfo.wisdom - 10) / 2): null}</h6>
                <h6 className="Saving_Throws">+{sheetinfo.strength > 0 ? Math.floor((sheetinfo.charisma - 10) / 2): null}</h6>
                
                <div style={{ backgroundColor: sheetinfo.acrobatics ? "green" : null }} className="style_h6_background_Throws" ></div>
                <div style={{ backgroundColor: sheetinfo.animal_handling ? "green" : null }} className="style_h6_background_Throws" ></div>
                <div style={{ backgroundColor: sheetinfo.arcana ? "green" : null }} className="style_h6_background_Throws" ></div>
                <div style={{ backgroundColor: sheetinfo.athletics ? "green" : null }} className="style_h6_background_Throws" ></div>
                <div style={{ backgroundColor: sheetinfo.deception ? "green" : null }} className="style_h6_background_Throws" ></div>
                <div style={{ backgroundColor: sheetinfo.history ? "green" : null }} className="style_h6_background_Throws" ></div>
                
                <h2 className="Armorclass">11</h2>
                <h2 className="initiative">13</h2>
                <h2 className="Speed">{sheetinfo.speed}</h2>
                <h6 className="Hit_Point_max">{sheetinfo.strength > 0 ? sheetinfo.hit_die + Math.floor((sheetinfo.constitution - 10)/2): null}</h6>
                <h1 className="Current_Hit_Points">{sheetinfo.strength > 0 ? sheetinfo.hit_die + Math.floor((sheetinfo.constitution - 10)/2): null}</h1>
                <h2 className="Hitdie">1D {sheetinfo.hit_die}</h2>
                </div>
            <footer>
                <div className="Skills_Button_container">
                    <Link to="/home">
                        <button className="Print_Navigation" >Cancel</button>
                    </Link>
                    {/* <Link to="/home"> */}
                    <button onClick={this.createAndDownloadPdf} className="Print_Navigation">Download</button>
                    {/* </Link> */}
                </div>
            </footer>
                </div>
                

        )
    }
}

function mapStateToProps(state) {
    const { playerClass } = state
    return { playerClass }
}

export default connect(mapStateToProps,
    { setUser })(Print);
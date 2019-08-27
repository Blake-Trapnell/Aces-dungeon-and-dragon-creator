
import React, { Component } from "react"
import axios from "axios"
import { setUser, setAllSheets, setUserSheets } from "../../../ducks/reducer"
import { connect } from "react-redux"
import "./SheetsDemo.css"
import { Link, withRouter } from "react-router-dom"


class Sheets extends Component {
    state = {
        userSheets: null,
        allSheets: []
    }

    componentDidMount() {
        this.loadingscreen()
    }

    loadingscreen = async () => {
        let results = await axios.get('/auth/checkloggedin')
        const { username, email, user_id } = results.data
        this.props.setUser({ username, email, user_id })
        if (username) {
            let userResults = await axios.get(`/api/sheets/${user_id}`)
            const userSheets = userResults.data
            this.props.setUserSheets({ userSheets })
            this.setState({
                userSheets
            })
        }
        else {
            let allResults = await axios.get(`/api/sheets`)
            const allSheets = allResults.data
            this.setState({ allSheets })
        }
    }

    deleteBySheet_id = (sheetid) => {
        axios.delete(`api/sheets/${sheetid}`)

    }

    editBySheet_id = (sheetid) => {
        this.props.history.push(`/edit/${sheetid}`)
    }
    printBySheet_id = (sheetid) => {
        this.props.history.push(`/print/${sheetid}`)
    }

    render() {
        return (
            <div className="Sheets">
                <div className="Sheets_Main_Screen">
                    {this.state.userSheets ? this.state.userSheets.map(el =>
                        <div className="SheetsDemo_CharacterList" key={el.character_name}>
                            <div className="SheetsDemo_Character_Container">
                                <div className="SheetsDemo_Info">
                                    <h6 style={{color: "Black"}}>Character Name</h6>
                                    <h4 className="SheetsDemo_h4" >{el.character_name}</h4>
                                </div>
                                <div className="SheetsDemo_Info">
                                <h6 style={{color: "Black"}}>Player Name</h6>
                                    <h4 className="SheetsDemo_h4" >{el.playername}</h4>
                                </div>
                                <div className="SheetsDemo_Info">
                                <h6 style={{color: "Black"}}>Race</h6>
                                    <h4 className="SheetsDemo_h4" >{el.race}</h4>
                                </div>
                                <div className="SheetsDemo_Info">
                                <h6 style={{color: "Black"}}>Class</h6>
                                    <h4 className="SheetsDemo_h4" >{el.class}</h4>
                                </div>
                            </div>
                            <div className="SheetsDemo_Button_Container">
                                <button onClick={() => this.printBySheet_id(el.sheet_id)} className="SheetsDemo_Button">Preview</button>
                                <button onClick={() => this.editBySheet_id(el.sheet_id)} className="SheetsDemo_Button" >Edit</button>

                                <Link to="/home">
                                    <button onClick={() => this.deleteBySheet_id(el.sheet_id)} className="SheetsDemo_Button" >Delete</button>
                                </Link>

                            </div>
                        </div>
                    )
                        :
                        this.state.allSheets.map(el => (
                            <div className="SheetsDemo_CharacterList" key={el.character_name}>
                            <div className="SheetsDemo_Info">
                                    <h6 style={{color: "Black"}}>Character Name</h6>
                                    <h4 className="SheetsDemo_h4" >{el.character_name}</h4>
                                </div>
                                <div className="SheetsDemo_Info">
                                <h6 style={{color: "Black"}}>Player Name</h6>
                                    <h4 className="SheetsDemo_h4" >{el.playername}</h4>
                                </div>
                                <div className="SheetsDemo_Info">
                                <h6 style={{color: "Black"}}>Race</h6>
                                    <h4 className="SheetsDemo_h4" >{el.race}</h4>
                                </div>
                                <div className="SheetsDemo_Info">
                                <h6 style={{color: "Black"}}>Class</h6>
                                    <h4 className="SheetsDemo_h4" >{el.class}</h4>
                                </div>
                                <div className="SheetsDemo_Button_Container">
                                    <button onClick={() => this.printBySheet_id(el.sheet_id)} className="SheetsDemo_Button">Preview</button>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    const { username, email, user_id } = state
    return { username, email, user_id }
}

export default withRouter(connect(mapStateToProps, { setUser, setAllSheets, setUserSheets })(Sheets))
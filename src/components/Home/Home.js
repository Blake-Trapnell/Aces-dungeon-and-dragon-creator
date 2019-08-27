import React, { Component } from "react"
// import axios from "axios"
import { setUser, setAllSheets, setUserSheets } from "../../ducks/reducer"
import { connect } from "react-redux"
import "./Home.css"
// import Sheets from "../Home/Sheets/Sheets"
import SheetDemo from "../Home/SheetsDemo/SheetsDemo"

class Home extends Component {


    render() {

        return (
            <div className="Home">
                <div className="Home_Main_Screen">
                    <SheetDemo />
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    const { username, email, user_id } = state
    return { username, email, user_id }
}

export default connect(mapStateToProps, { setUser, setAllSheets, setUserSheets })(Home);
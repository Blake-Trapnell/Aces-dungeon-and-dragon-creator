import React from "react"
import {Route, Switch} from "react-router-dom"

import Login from "./components/LoginRegister/Login"
import Home from "./components/Home/Home"
import Raceandclass from "./components/AdventureLeague/Wizard/ClassAndRace/ClassAndRace"
import Abilitypoints from "./components/AdventureLeague/Wizard/AbilityPoints/AbilityPoints"
// import Archetype from "./components/AdventureLeague/Wizard/Archetype/Archetype"
import Equipment from "./components/AdventureLeague/Wizard/Equipment/Equipment"
import Skills from "./components/AdventureLeague/Wizard/Skills/Skills"
import Preview from "./components/AdventureLeague/Wizard/Preview/Preview"
import Edit from "./components/AdventureLeague/Wizard/Edit/Edit"
import Print from "./components/Print/Print"
export default (
    <Switch>
        <Route component = {Login}  path = "/" exact/>
        <Route component = {Home} path = "/home"  />
        <Route component = {Raceandclass} path = "/adventureleague/raceandclass"/>
        <Route component = {Abilitypoints} path = "/adventureleague/abilitypoints"/>
        <Route component = {Equipment} path = "/adventureleague/equipment"/>
        {/* <Route component = {Archetype} path = "/adventureleague/archetype"/> */}
        <Route component = {Skills} path = "/adventureleague/skills"/>
        <Route component = {Preview} path = "/adventureleague/preview"/>
        <Route component = {Edit} path = "/edit/:sheet_id"/>
        <Route component = {Print} path = "/print/:sheet_id"/>
    </Switch>
)
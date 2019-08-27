const initialState = {
    username: '',
    email: '',
    user_id: '',
    userSheets: [],
    allSheets: [],
    characterName: '',
    playerName: '',
    classinfo: [{name: "Barbarian"}],
    raceinfo: [{"name": "Dwarf"}],
    startingequipment: "http://www.dnd5eapi.co/api/startingequipment/1",
    background: 'Acoylte',
    alignment: 'Lawful Good',
    hit_die: 12,
    speed: "30",
    str: 8,
    dex: 10,
    wis: 12,
    int: 13,
    cha: 15,
    con: 14,
    acrobatics: false,
    arcana: true,
    animal_handling: false,
    athletics: false,
    deception: false,
    history: true,
    insight: false,
    intimidation: false,
    investigation: false,
    medicine: false,
    nature: false,
    perception: true,
    performance: false,
    persuassion: true,
    religion: false,
    sleight_of_hand: false,
    stealth: false,
    survival: false,

}

const SET_USER = "SET_USER"
const SET_ALL_SHEETS = "SET_ALL_SHEETS"
const SET_USER_SHEETS = "SET_USER_SHEETS"
const SET_WIZARD_STEP_ONE = "SET_WIZARD_STEP_ONE"
const SET_WIZARD_STEP_TWO = "SET_WIZARD_STEP_TWO"
const SET_WIZARD_STEP_THREE = "SET_WIZARD_STEP_THREE"

export function setUser(user) {
    return {
        type: SET_USER,
        payload: user
    }
}
export function setAllSheets(allsheets) {
    return {
        type: SET_ALL_SHEETS,
        payload: allsheets
    }
}
export function setUserSheets(userSheets) {

    return {
        type: SET_USER_SHEETS,
        payload: userSheets
    }
}
export function setWizardStepOne(classAndRaceInfo) {
    return {
        type: SET_WIZARD_STEP_ONE,
        payload: classAndRaceInfo
    }
}
export function setWizardStepTwo(abilitypoints){
    return{
        type: SET_WIZARD_STEP_TWO,
        payload: abilitypoints
    }
}
export function setWizardStepThree(skills) {
    return{
        type: SET_WIZARD_STEP_THREE,
        payload: skills
    }
}

export default (state = initialState, action) => {
    const {type, payload} = action
        switch (type) {
            case SET_USER :
                const {username, user_id, email, password} = payload
                return {...state,username, user_id, email, password}
            case SET_ALL_SHEETS :
                const {allSheets} = payload
                return {...state, allSheets}
            case SET_USER_SHEETS :
                const{userSheets} = payload
                return {...state, userSheets}
            case SET_WIZARD_STEP_ONE :
                const {characterName, playerName, classinfo, raceinfo, background, alignment, hit_die, speed, startingequipment} = payload
                return {...state, characterName, playerName, raceinfo, classinfo, background, alignment, hit_die, speed, startingequipment}
            case SET_WIZARD_STEP_TWO :
                const {str, dex, wis, int, cha, con} = payload
                return{...state, str, dex, wis, int, cha, con}
            case SET_WIZARD_STEP_THREE: 
            const {acrobatics, arcana, animal_handling, athletics, deception, history, insight, intimidation, investigation, medicine,
                nature, perception, performance, persuassion, religion, sleight_of_hand, stealth, survival} = payload
                return {...state, acrobatics, arcana, animal_handling, athletics, deception, history, insight, intimidation, investigation, medicine,
                    nature, perception, performance, persuassion, religion, sleight_of_hand, stealth, survival}
            default : return state
        }
    }

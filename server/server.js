require('dotenv').config()
const path = require('path');
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const bodyParser = require('body-parser')
const cors = require('cors')
const authCtrl = require('./Controllers/authController')
const sheetsCtrl = require('./Controllers/sheetsController')
const pdfCtrl = require('./Controllers/pdfController')
const {SERVER_PORT, CONNECTION_STRING, SECRET} = process.env
const PORT = SERVER_PORT || 4311
const app = express()


app.use( express.static( `${__dirname}/../build` ) );
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.json())
 app.use(session({
     secret: SECRET,
     resave: false,
     saveUninitialized: false,
     cookie: {
         maxAge: 1000 * 60 * 60 * 24 * 10
     }
 }))



 // Authentication
app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.delete('/auth/logout', authCtrl.logout)


// PDF
app.post('/create-pdf', pdfCtrl.createPdf);
app.get('/fetch-pdf', pdfCtrl.fetchPdf)


// Creation and manipulation of sheets
app.post('/api/sheets', sheetsCtrl.create)
app.get('/auth/checkloggedin', authCtrl.isLoggedIn)
app.get('/api/sheets', sheetsCtrl.getAllSheets)
app.get('/api/sheets/skills/:playerclass', sheetsCtrl.getClassSkills)
app.get('/api/sheets/backgroundskills/:background', sheetsCtrl.getBackgroundSkills)
app.get('/api/sheets/:userid', sheetsCtrl.getByUserid)
app.get('/api/sheets/edit/:sheetid', sheetsCtrl.getBySheetId)
app.get('/api/sheets/print/:sheetid', sheetsCtrl.getBySheetId)
app.delete('/api/sheets/:sheetid', sheetsCtrl.deleteBySheetId)
app.put('/api/sheets/:sheetid', sheetsCtrl.editBySheetId)


app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '../build/index.html'));
});





massive(CONNECTION_STRING).then(db => {
    app.set ('db',db)
    app.listen(PORT, ()=> console.log(`^.^ welcome to ${PORT}`))
}).catch(error => console.log('error connection to Db', error))
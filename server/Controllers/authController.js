const bcrypt = require('bcryptjs')
module.exports = {
    register: async (req,res) => {
        const db = req.app.get('db')
        const {username, password, email} = req.body
        if (username === "" || password === "" || email === "") {
            return res.status(400).send({message: `Please fill out the required fields`})
        }
        const user = await db.get.find_username_and_email([username, email])
        if (user.length > 0) {
            return res.status(400).send({message: 'username & or email is in use'})
        }
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        const newUser = await db.insert_user_info({username, email, hash})
            req.session.user = newUser[0]
            res.status(200).send({
                message: 'logged in',
                user: req.session.user,
                loggedIn: true
            })
        
    },
    login: async (req, res) => {
        const db = req.app.get('db')
        const {username, password} = req.body
        const user = await db.get.find_username_and_hash([username])
        if (user.length === 0) {
            return res.status(400).send({message: 'Username not found'})
        }
        const result = bcrypt.compareSync(password, user[0].hash)
        if (result) {
            delete user[0].hash
            req.session.user = user[0]
            return res.status(200).send({message: 'Logged in', user: req.session.user, loggedIn: true})
        }
        else {
            return res.status(401).send({message: 'wrong password'})
        }
    },
    logout: (req,res) => {
        req.session.destroy()
        res.status(200).send({message: 'Logged out', loggedIn: false})
    },

    isLoggedIn: (req,res) => {
            req.session.user ? 
            res.status(200).send(req.session.user)
            :
            res.status(200).send({message: 'User log out'})
    }
}
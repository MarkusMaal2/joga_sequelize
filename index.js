const express = require("express")
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

// connect to db
const Sequelize = require("sequelize")
const sequelize = new Sequelize("mysql://root:qwerty@localhost:3306/joga_sequelize")

// connection test
sequelize
    .authenticate()
    .then(() => {
           console.log("Connection established")
    })
    .catch (err => {
        console.error(`Unable to connect to database: ${err}`)
    })

// routes
/*app.get("/", (req, res) => {
    res.json({ message: "Welcome to sequelize application!"})
})*/
const articleRouter = require('./routes/article')
app.use('/', articleRouter)
app.use('/article', articleRouter)

// listener
app.listen(3010, () => {
    console.log("Server is running on http://localhost:3010")
})
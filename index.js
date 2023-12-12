const express = require("express")
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const hbs = require('express-handlebars')

const path = require('path')
// setup template dir and file exts
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')
app.engine('hbs', hbs.engine({
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: __dirname + '/views/layouts',
}))

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
const authorRouter = require('./routes/author')
app.use(express.static('public'))
app.use('/', articleRouter)
app.use('/article', articleRouter)
app.use('/author', authorRouter)
app.use('admin/article', articleRouter)

// listener
app.listen(3010, () => {
    console.log("Server is running on http://localhost:3010")
})
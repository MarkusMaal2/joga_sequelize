
// connect to db
const Sequelize = require("sequelize")
const sequelize = new Sequelize("mysql://root:qwerty@localhost:3306/joga_sequelize")

// read model data
const models = require('../models')


// get author's articles from table
const getAuthorArticles = (req, res) => {
    models.Author.findByPk(req.params.id)
        .then
        (author => {
            models.Article.findAll({
                where: {
                    author_id: author.id
                }
            }).then(articles => {
                out = {}
                out.Author = JSON.parse(JSON.stringify(author))
                out.Author.Articles = articles
                return res.status(200).json(out);
            })
                .catch (error => {
                    console.log(error);
                    return res.status(500).send(error.message);
                })
        })
        .catch
        (error => {
            console.log(error)
            return res.status(500).send(error.message);
        })
}

module.exports = {
    getAuthorArticles
}
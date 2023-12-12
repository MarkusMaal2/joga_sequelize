// database connection ORM object
const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelize')

// read models data
const models = require('../../models')

// create new article
const createArticle = (req, res) => {
    // get form data
    let name= req.body.name
    let slug = req.body.slug
    let image = req.body.image
    let body = req.body.body

    const newArticle = models.Article.create({
        name: name,
        slug: slug,
        image: image,
        body: body,
        published: new Date().toISOString().slice(0, 19).replace('T', ' ')
    })
        .then(article => {
            console.log(article)
            return res.status(200).json({message: 'New article was added!'})
        })
        .catch (error => {
            return res.status(500).send(error.message);
        })
}

const updateArticle = (req, res) => {
    if (req.method === "POST") {
        // update stuff
        let name= req.body.name
        let slug = req.body.slug
        let image = req.body.image
        let body = req.body.body
        let author_id = req.body.author_id
        let mode = req.body.action
        if (mode !== "erase") {
            models.Article.update({
                name: name,
                slug: slug,
                image: image,
                body: body,
                author_id: author_id,
            }, {
                where: {id: req.params.id}
            }).then(rows => {
                if (rows > 0) {
                    return res.status(200).json({message: "Article updated successfully"})
                } else {
                    return res.status(400).json({message: "This article does not exist"})
                }
            }).catch(error => {
                return res.status(500).json({message: error.message})
            })
        } else {
            return res.status(200).json({message: "Feature not implemented"})
        }
    } else if (req.method === "GET") {
        // show form
        models.Article.findByPk(req.params.id, {
            include: [
                {
                    model: models.Author
                }
            ],
        }).then(article => {
            models.Author.findAll().then(
                (authors) => {
                    const authorValues = [];
                    authors.forEach((author) => {
                        authorValues.push(author.dataValues)
                    })
                    res.render('edit', {
                        message: "",
                        article: article.dataValues,
                        authors: authorValues
                    })
                }
            )
        })
            .catch((error) => {
                return res.status(500).json({message: error.message})
            })
    } else {
        // other methods not allowed
        console.log(`'${req.method}' is an invalid method: POST or GET expected`)
        return res.status(400).json({message: `'${req.method}' is an invalid method: POST or GET expected`});
    }
}

module.exports = {
    createArticle,
    updateArticle
}
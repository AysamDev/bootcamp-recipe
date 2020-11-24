const express = require('express')
const bodyParser = require(`body-parser`)
const path = require('path')
const urllib = require('urllib')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.get('/recipes/:ingredient',function(req,res)
{
    const ingredient = req.params.ingredient
    urllib.request(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`,function(err,data,respond)
    {
        let recipesFound = []
        const recipes = JSON.parse(data)
           recipes.results.map( m => {
            
            let container = {}

            container.ingredients = m.ingredients
            container.title = m.title.toUpperCase()
            container.thumbnail = m.thumbnail
            container.href = m.href
            recipesFound.push(container)
        })
        res.send(recipesFound)
    })
})
app.get('/sanity',function(req,res)
{
    res.send("OKAY")
})

const port = 8080 
app.listen(port, function () {
    console.log(`Server running on ${port}`)
})
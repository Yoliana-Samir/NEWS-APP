const request = require ('request')
const url ='https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1c0cd3c2662a4c98855cbff59cfd58d1'

const { response } = require('express')
const express = require('express')
const app = express()
const port = process.env.PORT || 3000




console.log(__dirname)

const path = require ('path')
console.log(path.join(__dirname, '../'))
console.log(path.join(__dirname, '../public'))

const publicDirectory = path.join(__dirname, '../public')
app.use(express.static(publicDirectory)) 




app.set('view engine', 'hbs');


app.get('/news',(req,res)=>{
    res.render.registerPartial('index',{
        title: response.body.articles.title,
        description: response.body.articles.description,
        url: response.body.articles.urlToImage,
    })
})



app.listen(port, ()=>{
    console.log(`server is running ${port}`)
})
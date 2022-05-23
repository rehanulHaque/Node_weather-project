// Require Modules
const express = require("express");
const path = require("path");
const ejs = require('ejs')
const forecast = require("./utils/forecast");
const weather = require("./utils/forecast");

//Defining Express
const app = express();
const port = process.env.PORT || 3000

// Defining Paths
const viewsPath = path.join(__dirname, "./templates/views")
const ejsPath = path.join(__dirname, "/templates/partials")

//setting views paths or Engine
app.set("view engine", "ejs")
app.set("views", viewsPath)


// Setup static File of public folder
app.use(express.static('public'))


app.get("", (req, res)=> {
  res.render('index', {
    title: 'Home',
    text: 'this is helpful',
    author: "Rehan"
  })
})

app.get("/about", (req, res)=> {
  res.render('about', {
    title: 'About',
    text: 'this is helpful',
    author: "Rehan"
  })
})
app.get("/help", (req, res)=> {
  res.render('help', {
    title: 'Help',
    text: 'this is helpful',
    author: "Rehan"
  })
})

app.get("/weather", (req, res)=> {
  if(!req.query.address){
    return res.send({
      error: "You Must Provide Address"
    })
  }
  weather(req.query.address, (err, {location, temperature, feelslike} = {}) => {
    res.send({
      location: location,
      temperature: temperature,
      feelslike: feelslike
    })
  })
})


app.get("/help/*", (req, res)=> {
  res.render('article', {
    title: "article not found",
    content: "This article not found",
    text: 'this is helpful',
  })
})

app.get("*", (req, res)=> {
  res.render('article', {
    title: "page not found",
    content: "This page not found",
    text: 'this is helpful',
  })
})


// Making Port For Express
app.listen(port);
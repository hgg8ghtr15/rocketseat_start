const express = require('express');

const app = express();

// app.set('views', '/viewspages');
app.set("view engine", "ejs")


app.get("/", function (req, res) {

    const items = [
        {
            title: "D",
            mensagem : "Mais"
        },
        {
            title: "E",
            mensagem : "Elefante"
        },
        {
            title: "carinho",
            mensagem : "Elefante"
        }
    ]

    res.render('pages/index', { qualidades: items })
})

app.get("/about", function (req, res) {
    res.render('pages/about')
})

app.listen(8080)
console.log('Rodando')
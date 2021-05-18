const express = require('express'); 
const app = express(); /* the way to create application by using express */
const path = require('path');
const pokemons_data = require('./pokemons.json'); 

app.use("/assets", express.static("static-asset"));

app.get('/api/pokemons', (req, res) => { 
    const result = pokemons_data.map((pock) => {  /* map get index in the array, and return an object */
        return{
            id: pock.id,
            name: pock.name,
            type1: pock.type[0],
            type2: pock.type[1]
        }
    });
    res.send(result); /* return json */
});

app.get("/", (req,res) => {
    res.sendFile(path.resolve("./index.html")); /* resolve ייתן מיקום אבסולוטי*/ 
});

app.listen(3000); 

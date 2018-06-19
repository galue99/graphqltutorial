'use strict';

const express    = require('express');
const app        = express();
const cors       = require('cors');
let contacts     = require('./data');
/*
//const expressGraphQL = require('express-graphql');

const schema = require('./schema/schema');

app.use('/graphql', expressGraphQL({
    schema: schema,
    graphiql: true
}));*/

//app.use(bodyParser.urlencoded({extends: true}));
app.use(cors());



// GET, POST, PUT, DELETE, PATCH
app.get('/api/contacts', (request, response) => {
    if (!contacts){
        response.status(404).json({ message: 'no contacts'});
    }
    response.json(contacts);
});

app.get('/api/contacts/:id', (request, response) =>{
    const requestId = request.params.id;

    let contact = contacts.filter(contact => {
        return contact.id == requestId;
    });

    response.json(contact[0]);


});


const hostname = 'localhost';
const port = 4000;

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
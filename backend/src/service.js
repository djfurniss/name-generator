const knex = require("./db/connection")

function listAdjectives () {
    return knex("adjectives")
    .select("adjective")
};

function listNouns () {
    return knex("nouns")
    .select("noun")
}

module.exports = {
    listAdjectives,
    listNouns
}
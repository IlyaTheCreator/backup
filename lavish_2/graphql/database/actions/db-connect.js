const knex = require('../mysql')

knex.raw('show schemas') // just shows which tables we have
    .then(res => console.log(res))
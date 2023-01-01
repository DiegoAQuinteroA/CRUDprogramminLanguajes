const dotenv = require('dotenv').config();

const config = {
    db: {
        host: process.env.HOSTNAME,
        user: process.env.USER,
        password: process.env.PASRWOED,
        database: process.env.DATABASE,
    },
    listPerPage: 10
}

module.exports = config;
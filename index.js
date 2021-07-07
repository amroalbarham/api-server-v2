'use strict';

require('dotenv').config();
const server = require('./src/server');
const mongoose = require('mongoose');
const pool = require('./pool');
const PORT = process.env.PORT || 3000;


pool
    .connect()
    .then(() => {
        server.start(PORT);
    }).catch((e) => {
        console.error('data base connection error: ', e.message);
    })


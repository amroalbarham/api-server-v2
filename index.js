'use strict';

require('dotenv').config();
const server = require('./src/server');
const mongoose = require('mongoose');
const pool=require('./pool');


pool
.connect()
.then(()=>{
    server.start(process.env.PORT);
}).catch((e)=>{
    console.error('data base connection error: ',e.message);
})


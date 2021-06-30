'use strict';

const express=require('express');
const cors=require('cors');
const app=express();
const clothRoute=require('./routes/clothes');
const foodRout=require('./routes/food');
const notFoundHandler=require('./error-handlers/404');
const errorHandler=require('./error-handlers/500');
app.use(cors());
app.use(express.json());
app.use('/api/v1/clothe', clothRoute);
app.use('/api/v1/food', foodRout);
app.use('*', notFoundHandler);
app.use(errorHandler);


module.exports = {
  app,
  start: (port) => {
    app.listen(port, () => console.log(`up and running on ${port}`));
  },
};

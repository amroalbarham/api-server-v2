'use strict';

const express = require('express');
const router = express.Router();
const foodModel = require('../models/food');
const Interface = require('../models/data-collection-class');
const food = new Interface('food');
const validator = require('../middleware/validator');


router.get('/', getHandler);
router.get('/:id', getHandler);
router.post('/', validator, postHandler);
router.put('/:id', validator, putHandler);
router.delete('/:id', deleteHandler);


async function getHandler(req, res,next) {
  try {
    const respObj = await food.read(req.params.id);
    res.json(respObj.rows);
  } catch (e) {
    next(e);
  }
}
async function postHandler(req, res,next) {
  try {
    const respObj = await food.create(req.body);
    res.json(respObj.rows[0]);
  } catch (e) {
    next(e);
  }
}
async function putHandler(req, res,next) {
  try {
    const respObj = await food.update(req.params.id, req.body);
    res.json(respObj.rows[0]);
  } catch (e) {
    next(e);
  }
}

async function deleteHandler(req, res,next) {
  try {

    const respObj = await food.delete(req.params.id);
    res.json(respObj.rows[0]);
  } catch (e) {
    next(e);

  }

}

module.exports = router;

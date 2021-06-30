'use strict';
const express = require('express');
const router = express.Router();
const clotheModel = require('../models/clothes');
const Interface = require('../models/data-collection-class');
const clothe = new Interface(clotheModel);
const validator = require('../middleware/validator');



router.get('/', getHandler);
router.get('/:id', getHandler);
router.post('/', validator, postHandler);
router.put('/:id', validator, putHandler);
router.delete('/:id', deleteHandler);


async function getHandler(req, res) {
  try {
    const respObj = await clothe.read(req.params.id);
    res.json(respObj);
  } catch (e) {
    next(e);
  }
}
async function postHandler(req, res) {
  try {
    const respObj = await clothe.create(req.body);
    res.json(respObj);
  } catch (e) {
    next(e);
  }
}
async function putHandler(req, res) {
  try {
    const respObj = await clothe.update(req.params.id, req.body);
    res.json(respObj);
  } catch (e) {
    next(e);
  }
}

async function deleteHandler(req, res) {
  try {

    const respObj = await clothe.delete(req.params.id);
    res.json(respObj);
  } catch (e) {
    next(e);

  }

}
module.exports = router;



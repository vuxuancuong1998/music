const express = require('express');
const { model } = require('mongoose');
const musicController = require('../controllers/music.controller');
const musicRouter = express.Router();
musicRouter.get('/',musicController.show);
musicRouter.post('/add',musicController.add);
musicRouter.post('/handleLove', musicController.handleLove);
musicRouter.post('/handleTrash', musicController.handleTrash);
musicRouter.post('/TrashItem',musicController.TrashItem);

module.exports = musicRouter;
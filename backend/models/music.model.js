const mongoose = require("mongoose");
var MusicSchema = new mongoose.Schema({ name: String, author:String, type: String, isLove:Boolean, isTrash:Boolean, day:String, url:String });
var musicModel = mongoose.model('musicModel', MusicSchema, 'musics');

module.exports = musicModel;

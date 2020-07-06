var musicModel = require('../models/music.model')
module.exports = {
    show: async (req, res) => {
      var data =  await musicModel.find();
        res.send(data);
    },
    add: async (req, res) => {
      
        let {name,author,type, url, isLove = false, isTrash = false,newDate} = req.body;
        var newSong =  await musicModel({name:name, author:author, type:type, url:url, isLove:isLove, isTrash:isTrash,day:newDate});
       //Luu vao db
        newSong.save();
          res.status(200).send();
    },
    handleLove: async (req,res) => {
      // console.log(req.body);
      let {_id,isLove} = req.body;
      //Update trong db
      await musicModel.updateOne({_id:_id}, { $set: { isLove: isLove } });
      res.status(200).send();
    },
    handleTrash: async(req, res) => {
      // console.log(req.body);
      let {_id, isTrash} = req.body;
      await musicModel.updateOne({_id:_id}, { $set: { isTrash: isTrash } });
    
      res.status(200).send();
      
    },
    TrashItem: async(req,res) => {
        // console.log(req.body);
        let {item} = req.body;
        await musicModel.deleteOne({ _id: item })
        res.status(200).send();
        
    }
}
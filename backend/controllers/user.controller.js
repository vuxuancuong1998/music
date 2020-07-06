
var userModel = require("../models/user.model");
module.exports = {
    register:async (req,res) => {
        let {username,name,password,repassword,email} = req.body;
        let userAdd = await userModel({ username:username,name: name, password:password, email:email});
        userAdd.save();
        // let tim = await userModel.find({}, function(err, data){

        //     console.log(email);
        // });

        res.redirect('http://localhost:3000/login');
    },
    login: async (req,res) => {
        let username = req.body.username;
        let password = req.body.password;
        // console.log(email);
        let findUsername = await userModel.findOne({username:username});
        let findPassword = await userModel.findOne({password:password});
        if(!findUsername){
            res.redirect('http://localhost:3000/login');
            errors : [
                'Sai tài khoản'
            ]
        }
        if(!findPassword === password){
            res.redirect('http://localhost:3000/login');
            errors: [
                "Mật khẩu sai"
            ]
        }

        // console.log(a);
        res.status(200).send();
    }
}
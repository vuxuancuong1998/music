const mongoose = require("mongoose");
var UserSchema = new mongoose.Schema({ username:String,name: String, password:String, email:String});
var UserModel = mongoose.model('UserModel', UserSchema, 'users');
// Tạo mã hóa mật khẩu
UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(4), null);
};

// kiểm tra mật khẩu có trùng khớp
UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = UserModel;

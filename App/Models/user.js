const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    first_name : {type : String},
    last_name : {type : String},
    username : {type : String , required : true , unique : true},
    mobile : {type : String , required : true , unique : true},
    roles : {type : [String] , default : ["USER"]},
    email : {type : String , required : true , unique : true},
    password : {type : String , requierd : true},
    skills : {type : [String] , default : []},
    teams : {type : [mongoose.Types.ObjectId] , default : []},
    token : {type : String , default : ""},
    image : {type : String}
},{timestamps : true})

const UserModel = mongoose.model('user',UserSchema);
module.exports = {UserModel}
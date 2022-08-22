const mongoose = require('mongoose')
const TeamSchema = new mongoose.Schema({
    name : {type : String , required : true , unique : true},
    description : {type : String , required : true , unique : true},
    owner : {type : [mongoose.Types.ObjectId] , default : []},
    users : {type : mongoose.Types.ObjectId , required : true , default : []},
},{timestamps : true})

const TeamModel = mongoose.model('team',TeamSchema);
module.exports = {TeamModel}
const mongoose = require('mongoose')


const userschema = {
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    }
}


const Userschema = new mongoose.Schema(userschema);

module.exports = mongoose.model("User", Userschema)
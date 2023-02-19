const mongoose = require('mongoose')


const blogschema = {
    title : {
        type : String,
        required : true,
        unique : true
    },
    summary : {
        type : String,
        required : true
    },
    subheading : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    subdescription : {
        type : String,
        required : true
    },
    image : {
        type : String
    },
    subimage : {
        type : String
    },
    category : {
        type : String
    },
    likes : {
        type : Number,
        required : true
    }
}




const Blogschema = new mongoose.Schema(blogschema, {timestamps : true});


module.exports = mongoose.model("Blog", Blogschema)
const mongoose = require('mongoose');
const objectId = mongoose.Schema.Types.ObjectId

 const blogSchema = new mongoose.Schema({
     "title" : {
         type : String,
         required : true
     },
     "body" : {
        type : String,
        required : true
    },
    "authorId" : {
        type : objectId,
        ref : 'project1Author',
        required : true
    },
    "tags" : ["String"],
    "catagory" : {
        type : ["String"],    // [technology, entertainment, life style, food, fashion]
        required : true
    },
    "subcategory" : ["String"],
    "deletedAt" : Date,
    "isDeleted" : {
        type : Boolean,
        default : false
    },
    "publishedAt" : Date,
    "isPublished" : {
        type : Boolean,
        default : false
    }

}
, {timestamps : true})

module.exports = mongoose.model('project1Blog', blogSchema);
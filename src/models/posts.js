import mongoose from 'mongoose';

const PostSchema = mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }     
});

module.exports = mongoose.model('Posts', PostSchema);
const mongoose=require('mongoose');

const Schema=mongoose.Schema({
    title:String,
    content:String
})
mongoose.exports=mongoose.Model("Post",Schema);
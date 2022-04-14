import mongoose from 'mongoose';


const schema = mongoose.Schema({
    avatar_img: String,
    postedBy:{
        userName: String
    },
    handle:String,
    title:String,
    stats: {
        replies: {type: Number, default: 0},
        retuits: {type: Number, default: 0},
        likes: {type: Number, default: 0}
    },
    liked: {type:Boolean, default:false},
}, {collection: 'tuits'});


export default schema;
import mongoose from "mongoose";


const NewsSchema = new mongoose.Schema({

    title: {
        type: String,
        require: true,
    },
    text: {
        type: String,
        require: true,
    },
    banner: {
        type: String,
        require: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    likes: {
        type: array,
        require: true,
    },
    comments: {
        type: array,
        require: true,
    },

});

const News = mongoose.model("News", NewsSchema);

export default News;
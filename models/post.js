const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {
        type: String,
        required: true

    },
    imageUrl: {
        type: String,
        required: true
    },
    content: {
        required: true,
        type: String
    },
    creator: {
        type: Object,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Post', postSchema);
const { Schema, model } = require("mongoose");

const listSchema = new Schema(
    {
        title: {
            type: String,
        },
        cover: {
            type: String,
            default: 'https://i.pinimg.com/originals/b3/e1/44/b3e1440f17b11f34677ddf69913b7003.jpg',
        },
        content: [{
            id: {
                type: Number
            },
            title: {
                type: String
            },
            images: [{
                type: String
            }],
            type: {
                type: String
            },
            status: {
                type: String
            },
            score: {
                type: String
            },
            chapters: {
                type: String
            },
            synopsis: {
                type: String
            },
            authors: [{
                type: String
            }],
            genres: [{
                type: String
            }],
        }],
    },
    {
        timestamps: true,
    }
);

const List = model("List", listSchema);

module.exports = List;
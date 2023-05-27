const mongoose = require(`mongoose`)

const commentSchema = mongoose.Schema({
    nameUser: String,
    textComment: String,
    newId: {
        type :mongoose.SchemaTypes.ObjectId,
        res: 'New'
    }
})

const Comment = mongoose.model('comments', commentSchema)

module.exports = Comment
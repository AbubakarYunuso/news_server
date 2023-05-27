const Comment = require("../models/Comment.model")

module.exports.commentsController= {
    addComments: async(req,res) =>{
        await Comment.create({
            nameUser: req.body.nameUser,
            textComment: req.body.text,
            newId: req.body.newId
        })
        res.json(`Комментарий добавлен`)
    },
    deleteComments: async (req,res)=>{
        await Comment.findByIdAndDelete(req.params.id)
        res.json(`Коммент удалён`)
    },
    getCommentsByNews:async (req,res)=>{
        let coms = await Comment.find({newCategore: req.params.id})
        res.json(coms)
    }
}


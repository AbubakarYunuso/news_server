const New = require("../models/New.model")

module.exports.newsController= {
    addNews: async (req, res) => {
       await New.create(
            {
                header: req.body.header,
                text: req.body.text,
                newCategore: req.body.newCategore
            }
        )
        res.json(`Добавлена новая новость`)
    },
    upgradeNews:async () => {
        await New.findByIdAndUpdate(req.params.id,{
            header: req.body.header,
            text: req.body.text,
            newCategore: req.body.newCategore
        })
        res.json(`Новость изменена`)
    },
    getNewsById:async (req,res)=>{
        let newsId = await New.findById(req.params.id)
        res.json(newsId)
    },
    getAllNews: async(req,res)=>{
        let allNews = await New.find({})
        res.json(allNews)
    },
    getNewsByCategories:async(req,res)=>{
        let newsCategories = await New.find({newCategore: req.params.id})
        res.json(newsCategories)
    },
    deleteNews: async (req,res)=>{
        await New.findByIdAndDelete(req.params.id)
        res.json(`Удаление новости`)
    }
}
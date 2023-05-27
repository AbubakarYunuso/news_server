const Categore = require("../models/Categore.model")

module.exports.categoriesController= {
    getCategore:async(req,res ) => {
        let categori = await Categore.find({})
        res.json(categori)
    },

    addCategore: async (req, res) =>{
        await Categore.create({
            nameCategore: req.body.nameCategore
        })
        res.json(`категория добавлена`)
    },
    deleteCategore: async (req,res)=>{
        await Categore.findByIdAndDelete(req.params.id)
        res.json(`категория удалена`)
    }
}
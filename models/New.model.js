const mongoose = require('mongoose')

const newShema = mongoose.Schema({
    header: String,
    text:String,
    newCategore:{
        type: mongoose.SchemaTypes.ObjectId,
        res: 'Categore'        
    }
})

const New = mongoose.model('news',newShema)

module.exports = New
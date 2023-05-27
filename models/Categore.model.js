const mongoose = require(`mongoose`)

const categoreSchema = mongoose.Schema({
    nameCategore: String
})
const Categore = mongoose.model('categories', categoreSchema)

module.exports = Categore
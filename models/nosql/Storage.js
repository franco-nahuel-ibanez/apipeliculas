const {model, Schema} = require('mongoose')

const StoreSchema = new Schema(
    {
        url:{
            type: String,
        },
        filename:{
            type: String
        }
    },
    {
        timestamps:true,
        versionKey: false
    }
)

module.exports = model('Storages', StoreSchema)
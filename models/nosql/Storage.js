const {model, Schema} = require('mongoose')
const mongooseDelete = require('mongoose-delete')

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

StoreSchema.plugin(mongooseDelete, { overrideMethods: "all" })
module.exports = model('Storages', StoreSchema)
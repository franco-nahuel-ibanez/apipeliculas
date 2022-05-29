const {model, Schema} = require('mongoose')
const mongooseDelete = require('mongoose-delete')

const UserSchema = new Schema(
    {
        name:{
            type: String,
        },
        age:{
            type: Number
        },
        email:{
            type: String,
            unique: true
        },
        password:{
            type: String,
            select: false
        },
        role:{
            type: ["user","adming"],
            default: "user"
        }
    },
    {
        timestamps:true,
        versionKey: false
    }
)

UserSchema.plugin(mongooseDelete, { overrideMethods: "all" })
module.exports = model('Users', UserSchema)
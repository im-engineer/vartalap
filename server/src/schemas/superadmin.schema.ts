import * as mongoose from 'mongoose'

export const Superadmin = new mongoose.Schema({
    id : Number,
    name : String,
    age : Number,
})
const mongoose = require("mongoose")

const Subscriptions = new mongoose.Schema({
    empresa:{
        type: String,
        required:true
    },
    estado_subscription:{
        type: String,
        required:true
    },
    nombre_subscription:{
        type: String,
        required:true
    },
    date:{
        type: Date,
        default:Date.now
    },
})

module.exports = mongoose.model('Subscriptions',Subscriptions)
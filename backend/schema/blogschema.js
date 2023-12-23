const mongoose = require('mongoose')

const blogschema = new mongoose.Schema({
   title: {
    type: String,
    required: true
   },
   body: {
    type: String,
    required: true
   }
}, { timestamps: true })



module.exports = mongoose.model("blogpost", blogschema )

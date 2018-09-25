const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HappySchema = new Schema({

name:{
    password:String,
    Balance: true
}

    });

module.exports = HappySchema;
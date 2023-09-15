const mongoose = require('mongoose')

const connectDB = (Url) => {
    return mongoose.connect(Url)
}

module.exports = connectDB
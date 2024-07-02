const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connected To MOngodb Database ${mongoose.connection.host}`.bgMagenta);
    } catch (error) {
        console.log(`Mongodb Database Error ${error}`.bgRed.white)
    }
}
module.exports = connectDB;

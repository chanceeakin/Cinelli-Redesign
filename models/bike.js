const mongoose = require('mongoose');

const bikeSchema = new mongoose.Schema({
        name: String,
        image: String,
        description: String,
        price: Number,
        // frameMaterial: String,
        // brakeType: String,
        // bikeType: String,
        // color: String,
        // size: String,
        // count: Number,

        author: {
            id: { 
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            },
            username: String
        }
});

 const Bike = mongoose.model("Bike", bikeSchema);

 module.exports = Bike;
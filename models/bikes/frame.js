const mongoose = require('mongoose');

const bikeFrameSchema = new mongoose.Schema({

        // IDENTITY
        name: String,
        mainImage: String,
        gallery: [String],
        description: String,
        price: Number,
        sku: String,
        bikeType: String,
        color: String,
        sizes:[
                {
                size: String,
                count: Number     
                }
        ],
        // FRAMESET
        frame: String,
        fork: String,
        weight: String,
        // COCKPIT
        seatpost: String,
        seatClamp: String,
        cableRouting: String,
        headset: String,
        // BRAKES
        brakes: String,
        // DRIVETRAIN
        bottomBracket: String,
        // WHEELS
        tireClearance: String,
        hubSpacing: String,



       
        
      
        

        // author: {
        //     id: { 
        //         type: mongoose.Schema.Types.ObjectId,
        //         ref: "User"
        //     },
        //     username: String
        // }
    });

module.exports = mongoose.model('BikeFrame', bikeFrameSchema);
const mongoose = require('mongoose');

const bikeSchema = new mongoose.Schema({
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
        stem: String,
        tape: String,
        saddle: String,
        seatpost: String,
        seatClamp: String,
        cableRouting: String,
        handlebars: String,
        headset: String,
        // BRAKES
        brakes: String,
        // DRIVETRAIN
        bottomBracket: String,
        frontDerailleur: String,
        rearDerailleur: String,
        casette: String,
        crankset: String, 
        chain: String,
        // WHEELS
        tireClearance: String,
        hubSpacing: String,
        wheels: String,
        tires: String,



       
        
      
        

        // author: {
        //     id: { 
        //         type: mongoose.Schema.Types.ObjectId,
        //         ref: "User"
        //     },
        //     username: String
        // }
});

 const Bike = mongoose.model("Bike", bikeSchema);

 module.exports = Bike;
const mongoose = require('mongoose'),
      Bike     = require('./models/bike');

    
const data = [
    {
        name: 'Superstar',
        image: '/public/img/Bikes/Road/SuperstarDisk1.jpg',
        description: "Superstar reinterprets, at the highest degree of innovation in carbon fiber, the legendary Italian competition bicycle on the track, the Cinelli that embodies the brands heritage and DNA.Unlike other brands that every year offer bicycles with an increasingly reduced use destination, Cinelli developed Superstar with a meticulous attention to how the intrinsic qualities of carbon fiber and the production processes could be used to create a tremendous edition contemporary of the legendary Italian Grand Tour quality in the saddle: an intelligent balance of lightness, perfect maneuverability on any surface and comfort over long distances.",
        price: 39999,
        frameMaterial: 'Carbon Fiber',
        brakeType: 'Disk',
        bikeType: 'Road',
        color: 'Green',
        size: 54,
        count: 27
        // author: {
        //     id: { 
        //         type: mongoose.Schema.Types.ObjectId,
        //         ref: "User"
        //     },
        //     username: 'HelloFriend'
        // }
    },
    {
        name: 'Superstar',
        image: '/public/img/Bikes/Road/SuperstarDisk1.jpg',
        description: "Superstar reinterprets, at the highest degree of innovation in carbon fiber, the legendary Italian competition bicycle on the track, the Cinelli that embodies the brands heritage and DNA.Unlike other brands that every year offer bicycles with an increasingly reduced use destination, Cinelli developed Superstar with a meticulous attention to how the intrinsic qualities of carbon fiber and the production processes could be used to create a tremendous edition contemporary of the legendary Italian Grand Tour quality in the saddle: an intelligent balance of lightness, perfect maneuverability on any surface and comfort over long distances.",
        price: 39999,
        frameMaterial: 'Carbon Fiber',
        brakeType: 'Disk',
        bikeType: 'Road',
        color: 'Green',
        size: 54,
        count: 27
        // author: {
        //     id: { 
        //         type: mongoose.Schema.Types.ObjectId,
        //         ref: "User"
        //     },
        //     username: 'HelloFriend'
        // }
    },
    {
        name: 'Superstar',
        image: '/public/img/Bikes/Road/SuperstarDisk1.jpg',
        description: "Superstar reinterprets, at the highest degree of innovation in carbon fiber, the legendary Italian competition bicycle on the track, the Cinelli that embodies the brands heritage and DNA.Unlike other brands that every year offer bicycles with an increasingly reduced use destination, Cinelli developed Superstar with a meticulous attention to how the intrinsic qualities of carbon fiber and the production processes could be used to create a tremendous edition contemporary of the legendary Italian Grand Tour quality in the saddle: an intelligent balance of lightness, perfect maneuverability on any surface and comfort over long distances.",
        price: 39999,
        frameMaterial: 'Carbon Fiber',
        brakeType: 'Disk',
        bikeType: 'Road',
        color: 'Green',
        size: 54,
        count: 27
        // author: {
        //     id: { 
        //         type: mongoose.Schema.Types.ObjectId,
        //         ref: "User"
        //     },
        //     username: 'HelloFriend'
        // }
    }
]

function seedDB(){
    // Remove all campgrounds
    Bike.remove({}, function(err){
         if(err){
             console.log(err);
         }
         console.log("removed bike!");
          //add a few campgrounds
        //  data.forEach(function(seed){
        //      Bike.create(seed, function(err, bike){
        //          if(err){
        //              console.log(err)
        //          } else {
        //              console.log("added a bike");
                   
        //          }
        //      });
        //  });
     }); 
     //add a few comments
 }


 module.exports = seedDB;
 
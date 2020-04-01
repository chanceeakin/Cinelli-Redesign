const mongoose = require('mongoose');

const dataFrames = [
    {
        name: 'Superstar Frameset',
        mainImage: '/public/img/Bikes/Frames/Superstar Frameset/Superstar Frame Main.png',
        gallery: [ '/public/img/Bikes/Frames/Superstar Frameset/Superstar Frame Rear.png'
            , '/public/img/Bikes/Frames/Superstar Frameset/Superstar Frame Seattube.png'
            , '/public/img/Bikes/Road/Superstar Disc/Superstar.jpeg'
             
         ],
        description: 'Superstar reinterprets at the highest degree of innovation in carbon fiber the legendary, Italian competition bicycle on the track the Cinelli that embodies the brands heritage and DNA.Unlike other brands that every year offer bicycles with an increasingly reduced use destination Cinelli developed Superstar with a meticulous attention to how the intrinsic qualities of carbon fiber and the production processes could be used to create a tremendous edition contemporary of the legendary Italian Grand Tour quality in the saddle: an intelligent balance of lightness perfect maneuverability on any surface and comfort over long distances.', 
        price: 39999,
        sku: 'BI4006-Black',
        bikeType: 'Road',
        color: 'Gray Street',
        sizes:[
                {
                size: 'XS(46)',
                count: 100    
                },
                {
                 size: 'S(48)',
                 count: 100    
                 },
                 {
                     size: 'M(51)',
                     count: 100    
                     },
                     {
                         size: 'L(54)',
                         count: 100    
                         },
                         {
                             size: 'XL(57)',
                             count: 100    
                             }
        ],
        // FRAMESET
        frame: 'Columbus Carbon Monocoque',
        fork: 'Columbus Futura Disc 1-1 / 8 "- 1-1 / 2" Monocoque',
        weight: 'Frame 970g / Fork 440g (uncut)',
        // COCKPIT
        seatpost: '27.2mm',
        seatClamp: '31,8mm (included)',
        cableRouting: 'Full Internal Routing - Di2 / EPS Compatible',
        headset: 'Integrated COLUMBUS Compass 1-1 / 8 "1-1 / 2"',
        // BRAKES
        brakes: 'F & R Flat mount disc brake Rotor size up to 160mm',
        // DRIVETRAIN
        bottomBracket: 'FSA / BB86',
        // WHEELS
        tireClearance: 'up to 700x28c',
        hubSpacing: 'Rear TA 12x142mm / L167mm skewer Front TA 12x100mm / L119mm skewer',
    },
    {
        name: 'Superstar Frameset',
        mainImage: '/public/img/Bikes/Frames/Superstar Frameset/Superstar Frame Main.png',
        gallery: [ '/public/img/Bikes/Frames/Superstar Frameset/Superstar Frame Rear.png'
            , '/public/img/Bikes/Frames/Superstar Frameset/Superstar Frame Seattube.png'
            , '/public/img/Bikes/Road/Superstar Disc/Superstar.jpeg'
             
         ],
        description: 'Superstar reinterprets at the highest degree of innovation in carbon fiber the legendary, Italian competition bicycle on the track the Cinelli that embodies the brands heritage and DNA.Unlike other brands that every year offer bicycles with an increasingly reduced use destination Cinelli developed Superstar with a meticulous attention to how the intrinsic qualities of carbon fiber and the production processes could be used to create a tremendous edition contemporary of the legendary Italian Grand Tour quality in the saddle: an intelligent balance of lightness perfect maneuverability on any surface and comfort over long distances.', 
        price: 39999,
        sku: 'BI4006-Black',
        bikeType: 'Road',
        color: 'Gray Street',
        sizes:[
                {
                size: 'XS(46)',
                count: 100    
                },
                {
                 size: 'S(48)',
                 count: 100    
                 },
                 {
                     size: 'M(51)',
                     count: 100    
                     },
                     {
                         size: 'L(54)',
                         count: 100    
                         },
                         {
                             size: 'XL(57)',
                             count: 100    
                             }
        ],
        // FRAMESET
        frame: 'Columbus Carbon Monocoque',
        fork: 'Columbus Futura Disc 1-1 / 8 "- 1-1 / 2" Monocoque',
        weight: 'Frame 970g / Fork 440g (uncut)',
        // COCKPIT
        seatpost: '27.2mm',
        seatClamp: '31,8mm (included)',
        cableRouting: 'Full Internal Routing - Di2 / EPS Compatible',
        headset: 'Integrated COLUMBUS Compass 1-1 / 8 "1-1 / 2"',
        // BRAKES
        brakes: 'F & R Flat mount disc brake Rotor size up to 160mm',
        // DRIVETRAIN
        bottomBracket: 'FSA / BB86',
        // WHEELS
        tireClearance: 'up to 700x28c',
        hubSpacing: 'Rear TA 12x142mm / L167mm skewer Front TA 12x100mm / L119mm skewer',
    },
    {
        name: 'Superstar Frameset',
        mainImage: '/public/img/Bikes/Frames/Superstar Frameset/Superstar Frame Main.png',
        gallery: [ '/public/img/Bikes/Frames/Superstar Frameset/Superstar Frame Rear.png'
            , '/public/img/Bikes/Frames/Superstar Frameset/Superstar Frame Seattube.png'
            , '/public/img/Bikes/Road/Superstar Disc/Superstar.jpeg'
             
         ],
        description: 'Superstar reinterprets at the highest degree of innovation in carbon fiber the legendary, Italian competition bicycle on the track the Cinelli that embodies the brands heritage and DNA.Unlike other brands that every year offer bicycles with an increasingly reduced use destination Cinelli developed Superstar with a meticulous attention to how the intrinsic qualities of carbon fiber and the production processes could be used to create a tremendous edition contemporary of the legendary Italian Grand Tour quality in the saddle: an intelligent balance of lightness perfect maneuverability on any surface and comfort over long distances.', 
        price: 39999,
        sku: 'BI4006-Black',
        bikeType: 'Road',
        color: 'Gray Street',
        sizes:[
                {
                size: 'XS(46)',
                count: 100    
                },
                {
                 size: 'S(48)',
                 count: 100    
                 },
                 {
                     size: 'M(51)',
                     count: 100    
                     },
                     {
                         size: 'L(54)',
                         count: 100    
                         },
                         {
                             size: 'XL(57)',
                             count: 100    
                             }
        ],
        // FRAMESET
        frame: 'Columbus Carbon Monocoque',
        fork: 'Columbus Futura Disc 1-1 / 8 "- 1-1 / 2" Monocoque',
        weight: 'Frame 970g / Fork 440g (uncut)',
        // COCKPIT
        seatpost: '27.2mm',
        seatClamp: '31,8mm (included)',
        cableRouting: 'Full Internal Routing - Di2 / EPS Compatible',
        headset: 'Integrated COLUMBUS Compass 1-1 / 8 "1-1 / 2"',
        // BRAKES
        brakes: 'F & R Flat mount disc brake Rotor size up to 160mm',
        // DRIVETRAIN
        bottomBracket: 'FSA / BB86',
        // WHEELS
        tireClearance: 'up to 700x28c',
        hubSpacing: 'Rear TA 12x142mm / L167mm skewer Front TA 12x100mm / L119mm skewer',
    },
    {
        name: 'Superstar Frameset',
        mainImage: '/public/img/Bikes/Frames/Superstar Frameset/Superstar Frame Main.png',
        gallery: [ '/public/img/Bikes/Frames/Superstar Frameset/Superstar Frame Rear.png'
            , '/public/img/Bikes/Frames/Superstar Frameset/Superstar Frame Seattube.png'
            , '/public/img/Bikes/Road/Superstar Disc/Superstar.jpeg'
             
         ],
        description: 'Superstar reinterprets at the highest degree of innovation in carbon fiber the legendary, Italian competition bicycle on the track the Cinelli that embodies the brands heritage and DNA.Unlike other brands that every year offer bicycles with an increasingly reduced use destination Cinelli developed Superstar with a meticulous attention to how the intrinsic qualities of carbon fiber and the production processes could be used to create a tremendous edition contemporary of the legendary Italian Grand Tour quality in the saddle: an intelligent balance of lightness perfect maneuverability on any surface and comfort over long distances.', 
        price: 39999,
        sku: 'BI4006-Black',
        bikeType: 'Road',
        color: 'Gray Street',
        sizes:[
                {
                size: 'XS(46)',
                count: 100    
                },
                {
                 size: 'S(48)',
                 count: 100    
                 },
                 {
                     size: 'M(51)',
                     count: 100    
                     },
                     {
                         size: 'L(54)',
                         count: 100    
                         },
                         {
                             size: 'XL(57)',
                             count: 100    
                             }
        ],
        // FRAMESET
        frame: 'Columbus Carbon Monocoque',
        fork: 'Columbus Futura Disc 1-1 / 8 "- 1-1 / 2" Monocoque',
        weight: 'Frame 970g / Fork 440g (uncut)',
        // COCKPIT
        seatpost: '27.2mm',
        seatClamp: '31,8mm (included)',
        cableRouting: 'Full Internal Routing - Di2 / EPS Compatible',
        headset: 'Integrated COLUMBUS Compass 1-1 / 8 "1-1 / 2"',
        // BRAKES
        brakes: 'F & R Flat mount disc brake Rotor size up to 160mm',
        // DRIVETRAIN
        bottomBracket: 'FSA / BB86',
        // WHEELS
        tireClearance: 'up to 700x28c',
        hubSpacing: 'Rear TA 12x142mm / L167mm skewer Front TA 12x100mm / L119mm skewer',
    }
   
]

module.exports = dataFrames;
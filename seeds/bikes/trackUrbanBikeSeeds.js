const mongoose = require('mongoose');

const dataTrackUrbanBikes = [
    
        {
            // IDENTITY
            name: 'Superstar',
            mainImage: '/public/img/Bikes/Road/Superstar Disc/Superstar.jpeg',
            gallery: [ '/public/img/Bikes/Road/Superstar Disc/superstar bottom bracket.jpeg'
                , '/public/img/Bikes/Road/Superstar Disc/superstar rear.jpeg'
                , '/public/img/Bikes/Road/Superstar Disc/superstar front end.jpeg'
                 
             ],
            description: 'Superstar reinterprets, at the highest degree of innovation in carbon fiber, the legendary Italian competition bicycle on the track, the Cinelli that embodies the brands heritage and DNA.Unlike other brands that every year offer bicycles with an increasingly reduced use destination, Cinelli developed Superstar with a meticulous attention to how the intrinsic qualities of carbon fiber and the production processes could be used to create a tremendous edition contemporary of the legendary Italian Grand Tour quality in the saddle: an intelligent balance of lightness, perfect maneuverability on any surface and comfort over long distances.', 
            price: 39999,
            sku: 'BI4006-Grey',
            bikeType: 'Track/Urban',
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
            stem: 'Cinelli 6061 Stem Size 90 (XS / S) 100 (M) 110 (L / XL)',
            tape: 'Cinelli Cork',
            saddle: 'Cinelli SSM Monza Start / 145mm',
            seatpost: '27.2mm',
            seatClamp: '31,8mm (included)',
            cableRouting: 'Full Internal Routing - Di2 / EPS Compatible',
            handlebar: 'Cinelli 6061 Handlebar / 31.8 / Drop 131mm Reach 55mm Size 40 (XS / S) 42 (M / L / XL)',
            headset: 'Integrated COLUMBUS Compass 1-1 / 8 "1-1 / 2"',
            // BRAKES
            brakes: 'F & R Flat mount disc brake Rotor size up to 160mm',
            // DRIVETRAIN
            bottomBracket: 'FSA / BB86',
            frontDerailleur: 'Braze-on Shimano ULTEGRA',
            rearDerailleur: 'Shimano ULTEGRA / 11 Speed',
            casette: 'Shimano Pint Box /105 / 11-28T',
            crankset: 'FSA Energy Modular Direct Mount / 52-36T Size 170 (XS) 172.5 (S / M / L) 175 (XL)', 
            chain: 'KMC',
            // WHEELS
            tireClearance: 'up to 700x28c',
            hubSpacing: 'Rear TA 12x142mm / L167mm skewer Front TA 12x100mm / L119mm skewer',
            wheels: 'Vision Team 30 / Centerlock / 700C',
            tires: 'Michelin Dynamic sport / 700x25c',
     },
     {
        // IDENTITY
        name: 'Superstar',
        mainImage: '/public/img/Bikes/Road/Superstar Disc/Superstar.jpeg',
        gallery: [ '/public/img/Bikes/Road/Superstar Disc/superstar bottom bracket.jpeg'
            , '/public/img/Bikes/Road/Superstar Disc/superstar rear.jpeg'
            , '/public/img/Bikes/Road/Superstar Disc/superstar front end.jpeg'
             
         ],
        description: 'Superstar reinterprets, at the highest degree of innovation in carbon fiber, the legendary Italian competition bicycle on the track, the Cinelli that embodies the brands heritage and DNA.Unlike other brands that every year offer bicycles with an increasingly reduced use destination, Cinelli developed Superstar with a meticulous attention to how the intrinsic qualities of carbon fiber and the production processes could be used to create a tremendous edition contemporary of the legendary Italian Grand Tour quality in the saddle: an intelligent balance of lightness, perfect maneuverability on any surface and comfort over long distances.', 
        price: 39999,
        sku: 'BI4006-Grey',
        bikeType: 'Track/Urban',
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
        stem: 'Cinelli 6061 Stem Size 90 (XS / S) 100 (M) 110 (L / XL)',
        tape: 'Cinelli Cork',
        saddle: 'Cinelli SSM Monza Start / 145mm',
        seatpost: '27.2mm',
        seatClamp: '31,8mm (included)',
        cableRouting: 'Full Internal Routing - Di2 / EPS Compatible',
        handlebar: 'Cinelli 6061 Handlebar / 31.8 / Drop 131mm Reach 55mm Size 40 (XS / S) 42 (M / L / XL)',
        headset: 'Integrated COLUMBUS Compass 1-1 / 8 "1-1 / 2"',
        // BRAKES
        brakes: 'F & R Flat mount disc brake Rotor size up to 160mm',
        // DRIVETRAIN
        bottomBracket: 'FSA / BB86',
        frontDerailleur: 'Braze-on Shimano ULTEGRA',
        rearDerailleur: 'Shimano ULTEGRA / 11 Speed',
        casette: 'Shimano Pint Box /105 / 11-28T',
        crankset: 'FSA Energy Modular Direct Mount / 52-36T Size 170 (XS) 172.5 (S / M / L) 175 (XL)', 
        chain: 'KMC',
        // WHEELS
        tireClearance: 'up to 700x28c',
        hubSpacing: 'Rear TA 12x142mm / L167mm skewer Front TA 12x100mm / L119mm skewer',
        wheels: 'Vision Team 30 / Centerlock / 700C',
        tires: 'Michelin Dynamic sport / 700x25c',
 },
 {
    // IDENTITY
    name: 'Superstar',
    mainImage: '/public/img/Bikes/Road/Superstar Disc/Superstar.jpeg',
    gallery: [ '/public/img/Bikes/Road/Superstar Disc/superstar bottom bracket.jpeg'
        , '/public/img/Bikes/Road/Superstar Disc/superstar rear.jpeg'
        , '/public/img/Bikes/Road/Superstar Disc/superstar front end.jpeg'
         
     ],
    description: 'Superstar reinterprets, at the highest degree of innovation in carbon fiber, the legendary Italian competition bicycle on the track, the Cinelli that embodies the brands heritage and DNA.Unlike other brands that every year offer bicycles with an increasingly reduced use destination, Cinelli developed Superstar with a meticulous attention to how the intrinsic qualities of carbon fiber and the production processes could be used to create a tremendous edition contemporary of the legendary Italian Grand Tour quality in the saddle: an intelligent balance of lightness, perfect maneuverability on any surface and comfort over long distances.', 
    price: 39999,
    sku: 'BI4006-Grey',
    bikeType: 'Track/Urban',
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
    stem: 'Cinelli 6061 Stem Size 90 (XS / S) 100 (M) 110 (L / XL)',
    tape: 'Cinelli Cork',
    saddle: 'Cinelli SSM Monza Start / 145mm',
    seatpost: '27.2mm',
    seatClamp: '31,8mm (included)',
    cableRouting: 'Full Internal Routing - Di2 / EPS Compatible',
    handlebar: 'Cinelli 6061 Handlebar / 31.8 / Drop 131mm Reach 55mm Size 40 (XS / S) 42 (M / L / XL)',
    headset: 'Integrated COLUMBUS Compass 1-1 / 8 "1-1 / 2"',
    // BRAKES
    brakes: 'F & R Flat mount disc brake Rotor size up to 160mm',
    // DRIVETRAIN
    bottomBracket: 'FSA / BB86',
    frontDerailleur: 'Braze-on Shimano ULTEGRA',
    rearDerailleur: 'Shimano ULTEGRA / 11 Speed',
    casette: 'Shimano Pint Box /105 / 11-28T',
    crankset: 'FSA Energy Modular Direct Mount / 52-36T Size 170 (XS) 172.5 (S / M / L) 175 (XL)', 
    chain: 'KMC',
    // WHEELS
    tireClearance: 'up to 700x28c',
    hubSpacing: 'Rear TA 12x142mm / L167mm skewer Front TA 12x100mm / L119mm skewer',
    wheels: 'Vision Team 30 / Centerlock / 700C',
    tires: 'Michelin Dynamic sport / 700x25c',
},
{
    // IDENTITY
    name: 'Superstar',
    mainImage: '/public/img/Bikes/Road/Superstar Disc/Superstar.jpeg',
    gallery: [ '/public/img/Bikes/Road/Superstar Disc/superstar bottom bracket.jpeg'
        , '/public/img/Bikes/Road/Superstar Disc/superstar rear.jpeg'
        , '/public/img/Bikes/Road/Superstar Disc/superstar front end.jpeg'
         
     ],
    description: 'Superstar reinterprets, at the highest degree of innovation in carbon fiber, the legendary Italian competition bicycle on the track, the Cinelli that embodies the brands heritage and DNA.Unlike other brands that every year offer bicycles with an increasingly reduced use destination, Cinelli developed Superstar with a meticulous attention to how the intrinsic qualities of carbon fiber and the production processes could be used to create a tremendous edition contemporary of the legendary Italian Grand Tour quality in the saddle: an intelligent balance of lightness, perfect maneuverability on any surface and comfort over long distances.', 
    price: 39999,
    sku: 'BI4006-Grey',
    bikeType: 'Track/Urban',
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
    stem: 'Cinelli 6061 Stem Size 90 (XS / S) 100 (M) 110 (L / XL)',
    tape: 'Cinelli Cork',
    saddle: 'Cinelli SSM Monza Start / 145mm',
    seatpost: '27.2mm',
    seatClamp: '31,8mm (included)',
    cableRouting: 'Full Internal Routing - Di2 / EPS Compatible',
    handlebar: 'Cinelli 6061 Handlebar / 31.8 / Drop 131mm Reach 55mm Size 40 (XS / S) 42 (M / L / XL)',
    headset: 'Integrated COLUMBUS Compass 1-1 / 8 "1-1 / 2"',
    // BRAKES
    brakes: 'F & R Flat mount disc brake Rotor size up to 160mm',
    // DRIVETRAIN
    bottomBracket: 'FSA / BB86',
    frontDerailleur: 'Braze-on Shimano ULTEGRA',
    rearDerailleur: 'Shimano ULTEGRA / 11 Speed',
    casette: 'Shimano Pint Box /105 / 11-28T',
    crankset: 'FSA Energy Modular Direct Mount / 52-36T Size 170 (XS) 172.5 (S / M / L) 175 (XL)', 
    chain: 'KMC',
    // WHEELS
    tireClearance: 'up to 700x28c',
    hubSpacing: 'Rear TA 12x142mm / L167mm skewer Front TA 12x100mm / L119mm skewer',
    wheels: 'Vision Team 30 / Centerlock / 700C',
    tires: 'Michelin Dynamic sport / 700x25c',
}
    
]

module.exports = dataTrackUrbanBikes;
var express     = require("express"),
    app         = express();
    port        = process.env.PORT || 3000

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use('/public/img/', express.static('./public/img'));


// REQUIRING ROUTES
    // ROOT ROUTES
const   rootRoutes           = require("./routes/rootRoutes/index"),
        roadRootRoutes       = require("./routes/rootRoutes/roadRoot"),
        gravelRootRoutes     = require("./routes/rootRoutes/gravelRoot"),
        trackUrbanRootRoutes = require("./routes/rootRoutes/trackUrbanRoot"),
        componentsRootRoutes = require("./routes/rootRoutes/componentsRoot"),
        apparelRootRoutes    = require("./routes/rootRoutes/apparelRoot"),
    
    // INDEX ROUTES
    shopBikesRoutes         = require("./routes/shop/allBikes"),
    shopRoadRoutes          = require("./routes/shop/bikes/road"),
    shopGravelRoutes        = require("./routes/shop/bikes/gravel"),
    shopTrackUrbanRoutes    = require("./routes/shop/bikes/trackUrban"),
    shopComponentsRoutes    = require("./routes/shop/components"),
    shopApparelRoutes       = require("./routes/shop/apparel"),
    shopFramesRoutes        = require("./routes/shop/bikes/frames"),
    insideCinelliRoutes     = require("./routes/insideCinelli/insideCinelli"),
    saleRoutes              = require("./routes/shop/sale");
   
// ROOT ROUTES
app.use("/", rootRoutes);
app.use("/road-bikes", roadRootRoutes);
app.use("/gravel-bikes", gravelRootRoutes);
app.use("/track-urban-bikes", trackUrbanRootRoutes);
app.use("/components", componentsRootRoutes);
app.use("/apparel", apparelRootRoutes);

// INDEX ROUTES
app.use("/shop/bikes", shopBikesRoutes);
app.use("/shop/road-bikes", shopRoadRoutes);
app.use("/shop/gravel-bikes", shopGravelRoutes);
app.use("/shop/track-urban-bikes", shopTrackUrbanRoutes);
app.use("/shop/components", shopComponentsRoutes);
app.use("/shop/apparel", shopApparelRoutes);
app.use("/shop/frames", shopFramesRoutes);
app.use("/inside-cinelli", insideCinelliRoutes);
app.use("/sale", saleRoutes);

app.listen(port, function(){
    console.log("The Server is Running!!");
});
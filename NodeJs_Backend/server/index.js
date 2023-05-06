const express = require('express');
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());


const db = require("./models");


//Routers
const postRouter = require('./routes/Admins')

app.use("/admins",postRouter);


db.sequelize.sync().then(()=>{
    app.listen(4000,()=>{
        console.log("running on port 4000")
    });
    
})


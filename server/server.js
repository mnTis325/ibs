console.log('Hello');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
// const dssdboperation = require('./routes/dsspunjab/entry');

// var bodyParser = require('body-parser');
// var Count = require('./models/dsspunjab/entry.model');
// var DssDB = require('./routes/dsspunjab/entry');

require('dotenv').config();

const app = express();
const router = express.Router;
const port = process.env.PORT || 5000;

app.use(cors());
// app.use(bodyParser);
app.use(express.json());
// app.use('/api', router);


const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true }
);

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

app.post('/')

//DataSources
const idsr = require("./routes/idsr/entry");
const dhis2punjab = require("./routes/dhis2punjab/entry");
const dsspunjab = require("./routes/dsspunjab/entry");
const hello = require("./routes/hello");
const dssModel = require("./models/dsspunjab/entry.model");
const Data = require('./models/dsspunjab/entry.model');

app.use('/', hello);
app.use('/idsr',idsr);
app.use('/dhis2punjab', dhis2punjab);
app.use('/dsspunjab', dsspunjab);


app.post('/dss/post', async (req, res) => {
  try{
    const { Disease, Gender, Age, Hospital, Count} = req.body;
    const newData = new Data({
      Disease, Gender, Age, Hospital, Count
    });
    const savedData = await newData.save();
    res.json(savedData);
  }
  catch(err){
    console.error("error Saving Data", err);
    res.status(500).json({error : "Failed to save Data"});
  }
});


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
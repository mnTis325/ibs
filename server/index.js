const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

//const exercisesRouter = require('./routes/excercises');
const entriesRouter = require('./routes/entries');

//Zoonotic
const brucellosesRouter = require('./routes/brucelloses');
const dogbitesRouter = require('./routes/dogbites');
const rabiesRouter = require('./routes/rabies');
const anthraxesRouter = require('./routes/anthraxes');
const bovinetuberculosesRouter = require('./routes/bovinetuberculoses');
const salmonellosesRouter = require('./routes/salmonelloses');


//Waterborne
const amebiasesRouter = require('./routes/amebiases');
const cholerasRouter = require('./routes/choleras');
const hepatitisesRouter = require('./routes/hepatitises');
const typhoidsRouter = require('./routes/typhoids');

//VectorBorne
const zikasRouter = require('./routes/zikas');
const malariasRouter = require('./routes/malarias');
const leishmaniasesRouter = require('./routes/leishmaniases');
const denguesRouter = require('./routes/dengues');
const chikungunyasRouter = require('./routes/chikungunyas');
const cchfsRouter = require('./routes/cchfs');

//Pandemic
const avianinfluenzasRouter = require('./routes/avianinfluenzas');
const coronasRouter = require('./routes/coronas');


//app.use('/exercises', exercisesRouter);
//app.use('/users', usersRouter);
app.use('/entries', entriesRouter);
app.use('/dogbites', dogbitesRouter);
app.use('/rabies', rabiesRouter);
app.use('/brucelloses', brucellosesRouter);
app.use('/anthraxes', anthraxesRouter);
app.use('/bovinetuberculoses', bovinetuberculosesRouter);
app.use('/salmonelloses', salmonellosesRouter);
app.use('/amebiases', amebiasesRouter);
app.use('/choleras', cholerasRouter);
app.use('/hepatitises', hepatitisesRouter);
app.use('/typhoids', typhoidsRouter);
app.use('/zikas', zikasRouter);
app.use('/malarias', malariasRouter);
app.use('/leishmaniases', leishmaniasesRouter);
app.use('/dengues', denguesRouter);
app.use('/chikungunyas', chikungunyasRouter);
app.use('/cchfs', cchfsRouter);
app.use('/avianinfluenzas', avianinfluenzasRouter);
app.use('/coronas', coronasRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
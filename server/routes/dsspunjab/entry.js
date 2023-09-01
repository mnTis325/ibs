// var config = require('../../communication/dssdbconfig');
// const sql = require('mssql');
const axios = require('axios');
const DSSCount = require('../../models/dsspunjab/entry.model');
const router = require('express').Router();

  const url = `https://${process.env.DSSPUNJAB_URL}`;
  const token = process.env.DSSPUNJAB_TOKEN;
  const username = process.env.DSSPUNJAB_USER;
  const password = process.env.DSSPUNJAB_PASS;
router.route('/').get((req, res) => {

    
    axios.get(url,
    {
      data:{
        'username': username,
        'password': password,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(response => {
      res.send(response.data);
    })
    .catch((error) => {
        console.log(error);
        console.log("Not receiving data");
    })
    findDataByCriteria(4);
});




// async function getCount() {
//     try {
//         console.log('Hello DSS here');
//         let pool = await sql.connect(config);
//         let diseaseCount = await pool.request().query("SELECT * from Count");
//         return diseaseCount.recordsets;
//     }
//     catch (error) {
//         console.log(error);
//     }
// }


router.post('/dss', async (req, res) => {
  try {
    // Make a request to localhost:5000/api/data to get the data
    const response = await axios.get('http://localhost:5000/dsspunjab');

    // Assuming the response data is an array of objects
    const dataArray = response.data;

    // Save each object in the array to MongoDB
    for (const dataObj of dataArray.data) {
      const newData = new DSSCount(dataObj);
      await newData.save();
    }

    res.json({ message: 'Data saved to MongoDB' });
  } catch (err) {
    console.error('Error saving data:', err);
    res.status(500).json({ error: 'Failed to save data' });
  }
});

async function findDataByCriteria(age) {
  try {
    const query = { age: age };
    const users = await DSSCount.find(query);
    // const users = await DSSCount.find();
    // console.log('Data with', location, 'and age', age, ' and ', disease);
    console.log(users);
  } catch (err) {
    console.error('Error querying users:', err);
  }
}

// findDataByCriteria('Islamabad', 30, "Dengue");


router.get('/get', async (req, res) => {
  try {
    const count = await dsscounts.find();
    res.json(count);
    console.log(count);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});
module.exports =  router;
const router = require('express').Router();
const axios = require('axios');


router.route('/').get((req, res) => {
    
    const url = `http://${process.env.IDSR_URL}/api/analytics.json?dimension=dx:kCU8bjgclBg;HBN2Skd3HWG;iilwAN0zLvg;i7su3Z5QqDv;OV6kOBTvnXA;waEYS36VPa5;UYI4IHOgAWc;VSXDcyc6maD&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=false&skipRounding=false&completedOnly=true&outputIdScheme=Name&filter=pe:202210`
    axios.get(url,
    {
      auth: {
        username: process.env.IDSR_USER,
        password: process.env.IDSR_PASS
      }
    })
    .then(response => {
      res.send(response.data);
    })
    .catch((error) => {
        console.log(error);
        console.log("Not receiving data");
    })
});

router.route('/:selectedValue').get((req, res) => {
  const {selectedValue} =req.params;
  // console.log(selectedValue)
  
  const url = `http://${process.env.IDSR_URL}/api/analytics.json?dimension=dx:kCU8bjgclBg;HBN2Skd3HWG;iilwAN0zLvg;i7su3Z5QqDv;OV6kOBTvnXA;waEYS36VPa5;UYI4IHOgAWc;VSXDcyc6maD&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=false&skipRounding=false&completedOnly=true&outputIdScheme=Name&filter=pe:${selectedValue}`;
  axios.get(url,
  {
    auth: {
      username: process.env.IDSR_USER,
      password: process.env.IDSR_PASS
    }
  })
  .then(response => {
    res.send(response.data);
  })
  .catch((error) => {
      console.log(error);
      console.log("Not receiving data");
  })
});

router.route('/:selectedValue/:selectedYear').get((req, res) => {
  const {selectedValue, selectedYear} =req.params;
const url = `http://${process.env.IDSR_URL}/api/analytics.json?dimension=dx:kCU8bjgclBg;HBN2Skd3HWG;iilwAN0zLvg;i7su3Z5QqDv;OV6kOBTvnXA;waEYS36VPa5;UYI4IHOgAWc;VSXDcyc6maD&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=false&skipRounding=false&completedOnly=true&outputIdScheme=Name&filter=pe:${selectedYear}${selectedValue}`;
  console.log(url);
  axios.get(url,
  {
    auth: {
      username: process.env.IDSR_USER,
      password: process.env.IDSR_PASS
    }
  })
  .then(response => {
    // this.setState({dhis2punjab: response.data});
    res.send(response.data);
  })
  .catch((error) => {
      console.log(error);
      console.log("Not receiving data");
  })
});

module.exports = router;

{/*
const router = require('express').Router();
let Entry = require('../../models/entry.model');

router.route('/').get((req, res) => {
 axios.get(url,
  {
    auth: {
      username: process.env.IDSR_USER,
      password: process.env.IDSR_PASS
    }
  })
  .then(response => {
    // this.setState({dhis2punjab: response.data});
    res.send(response.data);
  })
  .catch((error) => {
      console.log(error);
      console.log("Not receiving data");
  })
});



router.route('/add').post((req, res) => {
//   const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);
  const hospitalDistrict = req.body.hospitalDistrict;
  const hospitalVisited = req.body.hospitalVisited;
  const facilityType = req.body.facilityType;
  const disease = req.body.disease;
  const visitDate = Date.parse(req.body.visitDate);
  age = Number(req.body.age);
  gender = req.body.gender;

  const newEntry = new Entry({
    username,
    description,
    duration,
    date,
    hospitalDistrict,
    hospitalVisited,
    facilityType,
    disease,
    visitDate,
    age,
    gender,    
  });

  newEntry.save()
  .then(() => res.json('Entry added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  DogBite.findById(req.params.id)
    .then(entry => res.json(entry))
    .catch(err => res.status(400).json('Error: ' + err));
});
/*
router.route('/:id').delete((req, res) => {
  DogBite.findByIdAndDelete(req.params.id)
    .then(() => res.json('Entry deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  DogBite.findById(req.params.id)
    .then(entry => {
      entry.username = req.body.username;
      entry.description = req.body.description;
      entry.duration = Number(req.body.duration);
      entry.date = Date.parse(req.body.date);

      entry.save()
        .then(() => res.json('Entry updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});
module.exports = router;
*/}
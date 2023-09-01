const router = require('express').Router();
const axios = require('axios');


router.route('/').get((req, res) => {
    const url = `http://${process.env.DHIS2PUNJAB_URL}/api/32/analytics.json?dimension=dx:E2MQ8ypL562&dimension=ou:SbuDOngzpe5&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=false&includeNumDen=false&skipRounding=true&completedOnly=true&outputIdScheme=Name&filter=pe:202210`;
    axios.get(url,
    {
      auth: {
        // username: 'one_health_api',
        username: process.env.DHIS2PUNJAB_USER,
        password: process.env.DHIS2PUNJAB_PASS
      }
    })
    .then(response => {
      res.send(response.data);
    })
    .catch((error) => {
        console.log(error);
        console.log("Not receiving data");
    })
    // console.send('Hello');
});

router.route('/:selectedValue').get((req, res) => {
  const {selectedValue} =req.params;
  // console.log(selectedMonth)
  
  const url = `http://116.58.20.67:8080/api/32/analytics.json?dimension=dx:E2MQ8ypL562&dimension=ou:SbuDOngzpe5&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=false&includeNumDen=false&skipRounding=true&completedOnly=true&outputIdScheme=Name&filter=pe:${selectedValue}`;
  axios.get(url,
  {
    auth: {
      username: 'one_health_api',
      password: 'one@DHIS&&22'
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

router.route('/:selectedValue/:selectedYear').get((req, res) => {
  const {selectedValue, selectedYear} =req.params;
  const url = `http://116.58.20.67:8080/api/32/analytics.json?dimension=dx:E2MQ8ypL562;HWGyRvqrUEi;aM3Na2jQTts;EU6zq5FygUi;AdIWS3Qd4Lx;nvmd6bKU7Mj;UhColMlS7sk;jdogBqT66LU;Af99m9CJdpH;hvsWLHwNqSJ&dimension=ou:SbuDOngzpe5&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=false&includeNumDen=false&skipRounding=true&completedOnly=true&outputIdScheme=Name&filter=pe:${selectedYear}${selectedValue}`;
  axios.get(url,
  {
    auth: {
      username: 'one_health_api',
      password: 'one@DHIS&&22'
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

router.route('/:selectedValue/:selectedYear/:selectedDisease').get((req, res) => {
  const {selectedValue, selectedYear, selectedDisease} =req.params;
  // const url = `http://116.58.20.67:8080/api/32/analytics.json?dimension=dx:${selectedDisease}&dimension=ou:SbuDOngzpe5;LEVEL-rgwzuMloh57&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=false&includeNumDen=false&skipRounding=true&completedOnly=true&outputIdScheme=Name&filter=pe:${selectedYear}${selectedValue}`;
  const url = `http://116.58.20.67:8080/api/32/analytics.json?dimension=dx:${selectedDisease}&dimension=ou:SbuDOngzpe5;LEVEL-zA42K37txCN&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=false&includeNumDen=false&skipRounding=true&completedOnly=true&outputIdScheme=Name&filter=pe:${selectedYear}${selectedValue}`;
  axios.get(url,
  {
    auth: {
      username: 'one_health_api',
      password: 'one@DHIS&&22'
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

import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";

const sdk = new ChartsEmbedSDK({
    baseUrl: 'https://charts.mongodb.com/charts-onehealth-cvjms'
 });
 const ohdiseaseChart = sdk.createChart({
   chartId: '63e532c6-b64e-44d0-8804-293d8648cf74',
 });
 ohdiseaseChart.render(document.getElementById("ohdiseaseChart"));


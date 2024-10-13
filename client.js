let request = require('request');

let url = `http://localhost:3000`;

//first create request new sensor reading with POST.
request.post(url, async function (err, response, body) {
    if(err){
  console.log('error:', err);
    } else {
  console.log("New sensor data requested");
    }
});

//first read the data using GET.
request(url, async function (err, response, body) {
    if(err){
        console.log('error:', err);
    } else {
  let sensorDocuments = JSON.parse(body);
        console.log(sensorDocuments);
    }
});

//first read the data using GET.
let url2 = `http://localhost:3000/66d5690b818a31e27e8f29e2`;
request(url2, async function (err, response, body) {
    if(err){
        console.log('error:', err);
    } else {
  let sensorDocuments = JSON.parse(body);
        console.log(sensorDocuments);
    }
});
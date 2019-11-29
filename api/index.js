const express = require('express')
const app = express()

var redis = require("redis"),
    client = redis.createClient();

const {promisify} = require('util');
const getAsync = promisify(client.get).bind(client);

app.get('/jobs', async function (req, res) {
    const jobs = await getAsync('github');
    console.log(JSON.parse(jobs).length);
    res.send('Hello World!')
})

app.listen(3001, function () {
  console.log('Example app listening on port 3000!')
})

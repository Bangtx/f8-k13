const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json({limit: '50mb'}));

const members = []

app.get('/', (req, res) => {
  res.json(members)
})

app.post('/', (req, res) => {
  members.push(req.body)
  res.json(req.body)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
//console.log("Hello express Start from Aimerz");

const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

// app.get('/', (req, res) => {
//   res.send('Hello World! Byy')
// })

// app.post('/', (req, res) => {
//   res.send(req.body)
// })

app.post('/', (req, res) => {
  res.send(req.query)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

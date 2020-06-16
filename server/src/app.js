const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

app.use(morgan('combined'))
app.use(express.json())
app.use(cors())

app.post('/register', (req, res) => {
  res.send({
    message: `hello ${req.body.email}`
  })
})

app.listen(process.env.PORT || 3000)

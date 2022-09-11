const express = require('express');
const morgan = require('morgan');
const app = express()
const port = 3001

app.use(morgan('combined'))

app.get('/tin-tuc', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`)
)
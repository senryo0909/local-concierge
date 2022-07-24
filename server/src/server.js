import express from 'express'

const PORT = 3005
const HOST = '0.0.0.0'

const app = express()

app.get('/', (req, res) => {
  const result = "connection success!!"
  res.json(result)
})

app.listen(PORT, HOST, () => {
  console.log(`Listening on port ${PORT}`)
})
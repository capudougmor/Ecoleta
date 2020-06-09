import express from 'express'

const app = express()

app.get('/users', (request, response) => {
  console.log('Listagem de ususrios')

  response.json([
    "Diego",
    "Douglas",
    "pedro"
  ])
} )

app.listen(3333)
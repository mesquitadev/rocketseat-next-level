import express from 'express';
const app = express();

app.get('/users', (request, response) => {
  response.send([
    'victor',
    'bruno',
    'luiz'
  ])
})

app.listen(3333);
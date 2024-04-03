import express, { Request, Response, response } from 'express'
import client, { Channel, Connection } from 'amqplib'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.post('/consumer', (request: Request, response: Response) => {
  const body = request.body
  return response.status(200).json(body)
})

app.get('/test', (request: Request, response: Response) => {
  return response.send('eeeeeeeeeeeeee')
})

app.listen(5002, () => {
  console.log(`Consumer is running ly lord on port 5002 ☕`)
})
import express, { Request, Response } from 'express'
import client, { Channel, Connection } from 'amqplib'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.post('/producer', (request: Request, response: Response) => {
  const body = request.body
  return response.status(200).json(body)
})

app.get('/', (resquest, response) => {
  return response.send('aaaaaaaaaaaaa')
})

app.listen(5001, () => {
  console.log(`Producer is running my boy on port 5001 ☕`)
})
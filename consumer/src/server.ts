import express from 'express'
import { router } from './routes';
import { RabbitmqServer } from './rabbitmq_server';

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(router)

// vai pegar os dados da queue
// const consumer = async () => {
//   const server = new RabbitmqServer('amqp://admin:admin@rabbitmq:5672')
//   await server.start()
//   await server.consume('test', (message) => {
//     console.log(message?.content.toString())
//   })
// }
// consumer()

app.listen(5002, () => {
  console.log(`Consumer is running ly lord on port 5002 ☕`)
})
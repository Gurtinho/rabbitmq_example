import { Router, Request, Response, response } from 'express'
import { RabbitmqServer } from '../rabbitmq_server'

export const router = Router()

router.get('/consumer', async (req: Request, res: Response) => {
  const server = new RabbitmqServer('amqp://admin:admin@rabbitmq:5672')
  await server.start()
  await server.consume('test', (message) => {
    // console.log(message?.content.toString())
    return res.status(200).json(message?.content.toString())
  })
})
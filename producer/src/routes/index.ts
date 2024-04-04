import { Router, Request, Response } from 'express'
import { RabbitmqServer } from '../rabbitmq_server'

export const router = Router()

router.post('/producer', async (req: Request, res: Response) => {
  const body = req.body
  const server = new RabbitmqServer('amqp://admin:admin@rabbitmq:5672')
  await server.start()
  await server.publishInQueue('test', JSON.stringify(body))
  return res.status(200).json(body)
})
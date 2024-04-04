import { Router, Request, Response, response } from 'express'

export const router = Router()

router.post('/consumer', async (req: Request, res: Response) => {
  return res.json('rota do consumer')
})
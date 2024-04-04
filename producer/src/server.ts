import express from 'express'
import { router } from './routes';

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(router)

app.listen(5001, () => {
  console.log(`Producer is running my boy on port 5001 ☕`)
})
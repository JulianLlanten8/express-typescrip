import express  from 'express'
import diaryRouter from './routes/diaries'

const app = express();

app.use(express.json()) // midleware que transforma la request.boddy en json

const port = 3000

app.get('/ping', (_req, res) => {
  console.log('algien a echo un ping')
  res.send('pong')
})

app.use('/api/diaries', diaryRouter)

app.listen(port, () => {
  console.log(`server is running on port ${port}`)
})

import express, { type Request, type Response } from 'express'
const app = express()
const port = 3000

app.get('/', (req: Request, res: Response) => {
  res.json({ Hello: 'World' })
})

app.listen(port, () => {
  console.log(`Express is listening at http://localhost:${port}`)
})

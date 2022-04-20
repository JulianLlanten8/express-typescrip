import express from 'express'
import * as diaryServices from '../services/diaryServices'
import toNewDiaryEntry from '../utils'

// Initializing the router con express para las solicitudes http{get,post,put,delete}
const router = express.Router()

// obtiene todos los diaries
router.get('/', (_req, res) => {
  res.send(diaryServices.getEntriesWithoutSencitiveInfo())
})

// obtiene un diario especifico
router.get('/:id', (req, res) => {
  const diary = diaryServices.findById(Number(req.params.id))
  return (diary != null) ? res.send(diary) : res.status(404).send('not found')
})

// agrega un suceso al diario
router.post('/', (req, res) => {
  try {
    const newDaryEntry = toNewDiaryEntry(req.body)
    const addedDiaryEntry = diaryServices.addDairy(newDaryEntry)
    res.json(addedDiaryEntry)
  } catch (e: any) {
    res.status(400).send(e.message)
  }
})

export default router

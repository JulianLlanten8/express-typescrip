import diaryData from './diaries.json'
import { DiaryEntry, NonSensitiveInfoDiaryEntry, NewDiaryEntry } from '../types.js'

// datos de el archivo diaries.json convertidos a un a una interface definida en el archivo types.d.ts
const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

// todos los datos de el archivo diaries.json
export const getEntries = (): DiaryEntry[] => diaries

// busqueda de un id en los diarieEntry y devuelve el especifico
export const findById = (id: number): NonSensitiveInfoDiaryEntry | undefined => {
  const entry = diaries.find(d => d.id === id)
  // evita devolver el atributo comment
  if (entry != null) {
    const { comment, ...restOfDiary } = entry
    return restOfDiary
  }
  // si no existe el id en el arreglo de diaries, devuelve undefined
  return entry
}

export const getEntriesWithoutSencitiveInfo = (): NonSensitiveInfoDiaryEntry[] => {
  // debuelve una copia de la entrada sin el comentario
  return diaries.map(({ id, date, weather, visibility }) => ({ id, date, weather, visibility }))
}

export const addDairy = (NewDiaryEntry: NewDiaryEntry): DiaryEntry => {
  const newDiary: DiaryEntry = {
    id: Math.max(...diaries.map(d => d.id)) + 1, // obtiene el id mas alto del arreglo de diaries
    ...NewDiaryEntry
  }
  diaries.push(newDiary)
  return newDiary
}

import { NewDiaryEntry, Weather, Visibility } from './types'

const parseComment = (commentFromRequets: any): string => {
  if (!isString(commentFromRequets)) {
    throw new Error('Incorrect or missing comment')
  }
  return commentFromRequets
}
const parseDate = (dateFromRequets: any): string => {
  if (!isString(dateFromRequets) || !isDate(dateFromRequets)) {
    throw new Error('Incorrect or missing date')
  }
  return dateFromRequets
}
const parseWeather = (weatherFromRequets: any): Weather => {
  if (!isString(weatherFromRequets) || !isWeather(weatherFromRequets)) {
    throw new Error('Incorrect or missing weather')
  }
  return weatherFromRequets
}
const isVisibility = (param: any): boolean => {
  return Object.values(Visibility).includes(param)
}
const parseVisibility = (visibilityFromRequets: any): Visibility => {
  if (!isString(visibilityFromRequets) || !isVisibility(visibilityFromRequets)) {
    throw new Error('Incorrect or missing visibility')
  }
  return visibilityFromRequets
}

const isWeather = (param: any): boolean => {
  // extrae el valor de la enumeracion Weather y lo compara con el parametro, si son iguales devuelve true
  return Object.values(Weather).includes(param)
}

const isString = (string: string): boolean => {
  // Evalua si la entrada es un String
  return typeof string === 'string' || String instanceof String
}
const isDate = (date: string): boolean => {
  // Evalua si la entrada es una fecha
  return Boolean(Date.parse(date))
}

const toNewDiaryEntry = (Object: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    comment: parseComment(Object.comment),
    date: parseDate(Object.date),
    weather: parseWeather(Object.weather),
    visibility: parseVisibility(Object.visibility)
  }
  return newEntry
}

export default toNewDiaryEntry

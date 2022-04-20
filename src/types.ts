export enum Weather{
  Sunny = 'sunny',
  rainy = 'rainy',
  cloudy = 'cloudy',
  snowy = 'snowy',
  windy = 'windy',
  stormy = 'stormy'
}
export enum Visibility {
  great = 'great',
  good = 'good',
  ok = 'ok',
  poor = 'poor',
  bad = 'bad'
}
export interface DiaryEntry{
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
};

// export type NonSensitiveInfoDiaryEntry = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'>
export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>
export type NewDiaryEntry = Omit<DiaryEntry, 'id'>

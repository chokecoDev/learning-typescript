import diaryData from '../data/diaries.json' with { type: 'json' }
import type { DiaryEntry } from '../types/diary.js'

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => diaries

export const addEntry = (): undefined => undefined
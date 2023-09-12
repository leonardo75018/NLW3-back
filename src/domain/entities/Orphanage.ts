import { IImage } from './Image'

export interface Orphanage {
  id: string
  name: string
  latitude: number
  longitude: number
  about: string
  instructions: string
  openOnWeekend: Boolean
  images: IImage[]
}

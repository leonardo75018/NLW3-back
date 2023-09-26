import { Orphanage } from '../entities/Orphanage'
import { createOrphanageBody } from '../types/CreateOrphanageBody'
import { updateOrphanageBody } from '../types/UpdateOrphanageBody'

export interface OrphanagesRepository {
  createOrphanage(params: createOrphanageBody): Promise<Orphanage>
  updateOrphanage(params: updateOrphanageBody): Promise<Orphanage>
  deleteOrphanage(orphanageId: string): Promise<void>
  getOrphanageById(orphanageId: string): Promise<Orphanage | null>
  getOrphanages(): Promise<Orphanage[] | []>
}

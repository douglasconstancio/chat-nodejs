import { Repository, EntityRepository } from 'typeorm'
import { Setting } from '../entities/settings'

@EntityRepository(Setting)
export class SettingsRepository extends Repository<Setting> {

}

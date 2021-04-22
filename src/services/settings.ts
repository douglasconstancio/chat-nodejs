import { getCustomRepository, Repository } from 'typeorm'
import { SettingsRepository } from '../repositories/settings'
import { Setting } from '../entities/setting'

interface ISettingCreate {
    chat: boolean
    username: string
}

export class SettingsService {

    private settingsRepository: Repository<Setting>

    constructor() {
        this.settingsRepository = getCustomRepository(SettingsRepository)
    }

    async create({ chat, username }: ISettingCreate) {
        const userAlreadyExists = await this.settingsRepository
            .findOne({ username })


        if (userAlreadyExists) {
            throw new Error('User already exists!')
        }

        const settings = this.settingsRepository.create({ chat, username })

        await this.settingsRepository.save(settings)

        return settings
    }

}

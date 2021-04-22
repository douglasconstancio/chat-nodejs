import { getCustomRepository, Repository } from 'typeorm'
import { MessagesRepository } from '../repositories/messages'
import { Message } from '../entities/message'

interface IMessageCreate {
    text: string
    user_id: string
    admin_id?: string
}

export class MessagesService {

    private messagesRepository: Repository<Message>

    constructor() {
        this.messagesRepository = getCustomRepository(MessagesRepository)
    }

    async create({ admin_id, text, user_id }: IMessageCreate) {
        const message = this.messagesRepository.create({
            admin_id,
            text,
            user_id
        })

        await this.messagesRepository.save(message)

        return message
    }

    async listByUser(user_id: string) {
        return this.messagesRepository.find({
            where: { user_id },
            relations: ['user']
        })
    }

}

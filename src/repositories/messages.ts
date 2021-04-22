import { Repository, EntityRepository } from 'typeorm'
import { Message } from '../entities/message'

@EntityRepository(Message)
export class MessagesRepository extends Repository<Message> {

}

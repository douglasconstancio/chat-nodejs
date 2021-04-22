import { Repository, EntityRepository } from 'typeorm'
import { User } from '../entities/user'

@EntityRepository(User)
export class UsersRepository extends Repository<User> {

}

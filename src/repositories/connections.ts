import { Repository, EntityRepository } from 'typeorm'
import { Connection } from '../entities/connection'

@EntityRepository(Connection)
export class ConnectionsRepository extends Repository<Connection> {

}

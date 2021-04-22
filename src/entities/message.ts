import { Column, CreateDateColumn, Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'
import { User } from './user'

@Entity('messages')
export class Message {

    @PrimaryColumn()
    id: string

    @Column({ nullable: true })
    admin_id?: string

    @Column()
    text: string

    @Column()
    user_id: string

    @CreateDateColumn()
    created_at: Date

    @JoinColumn({ name: 'user_id' })
    @ManyToOne(() => User)
    user: User

    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }

}

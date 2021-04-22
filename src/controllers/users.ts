import { Request, Response } from 'express'
import { UsersService } from '../services/users'

export class UsersController {

    async create(request: Request, response: Response): Promise<Response> {
        const { email } = request.body

        const usersService = new UsersService()

        const users = await usersService.create(email)

        return response.json(users)
    }

}

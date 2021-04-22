import { Router } from 'express'
import { SettingsController } from './controllers/settings'
import { UsersController } from './controllers/users'
import { MessagesController } from './controllers/messages'

const routes = Router()

const settingsController = new SettingsController()
const usersController = new UsersController()
const messagesController = new MessagesController()

routes.post('/settings', settingsController.create)
routes.get('/settings/:username', settingsController.findByUserName)
routes.put('/settings/:username', settingsController.update)

routes.post('/users', usersController.create)

routes.post('/messages', messagesController.create)
routes.get('/messages/:id', messagesController.showByUser)


export { routes }

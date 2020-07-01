import express from 'express'

import BonsaisController from './controllers/BonsaisController'

const routes = express.Router()

const bonsaisController = new BonsaisController()

routes.get('/bonsais/:id', bonsaisController.show)
routes.post('/bonsais', bonsaisController.create)


export default routes
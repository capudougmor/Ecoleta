import express from 'express'

import PointsController from './controllers/PointsController'
import ItemsController from './controllers/Itemscontroller'

// index, show, create, update, delete
const routes = express.Router()
const pointsController = new PointsController()
const itemsController = new ItemsController()

routes.get('/items', itemsController.index)

routes.post('/points', pointsController.create)
routes.get('/points:id', pointsController.show)


export default routes

//Service Parttern 
// Repository Pattern (Data Mapper)
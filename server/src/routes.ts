import express from 'express'

import multer from 'multer'
import multerConfig from './config/multer'

import PointsController from './controllers/PointsController'
import ItemsController from './controllers/Itemscontroller'

// index, show, create, update, delete
const routes = express.Router()
const upload = multer(multerConfig)

const pointsController = new PointsController()
const itemsController = new ItemsController()

routes.get('/items', itemsController.index)
routes.get('/points', pointsController.index)
routes.get('/points/:id', pointsController.show)


routes.post('/points', upload.single('image'), pointsController.create)
// routes.post('/points', upload.array('fotos'), pointsController.create) esta é se fosse varias fotos

export default routes

//Service Parttern 
// Repository Pattern (Data Mapper)
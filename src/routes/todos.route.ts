import { Router } from 'express'
import todoResource from '../resources/todo.resource'

const router = Router()

router.route('/todos')
  .get(todoResource.findAll)
  .post(todoResource.create)
  .put(todoResource.update)

router.route('/todos/:id')
  .get(todoResource.findById)

export let todoRoutes = router

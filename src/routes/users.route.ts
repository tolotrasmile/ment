import { Router } from 'express'
import userResource from '../resources/user.resource'

const router = Router()

router.route('/users')
  .get(userResource.findAll)
  .post(userResource.create)
  .put(userResource.update)

router.route('/users/:id')
  .get(userResource.findById)

export let userRoutes = router

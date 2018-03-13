import { Router } from 'express'
import { todoRoutes } from './todos.route'
import { userRoutes } from './users.route'
import pageController from '../controllers/index'

const router: Router = Router()
router.get('/', pageController.index)
router.use(todoRoutes)
router.use(userRoutes)

export let route = router

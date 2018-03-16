import { Router } from 'express'
import pageController from '../controllers/index'
import { todoRoutes } from './todos.route'
import { userRoutes } from './users.route'

const router: Router = Router()
router.get('/', pageController.index)
router.use(todoRoutes)
router.use(userRoutes)

export let route = router

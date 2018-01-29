import { Router } from 'express'
import { todoRoutes } from './todos.route'
import { userRoutes } from './users.route'

const router: Router = Router()
router.get('/', (req, res) => res.json({ message: 'Connected to server' }))
router.use(todoRoutes)
router.use(userRoutes)

export let route = router

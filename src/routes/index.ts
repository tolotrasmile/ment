import { Router } from 'express'
import { todoRoutes } from './todos.route'

const router: Router = Router()
router.get('/', (req, res) => res.json({ message: 'Connected to server' }))
router.use(todoRoutes)

export let route = router

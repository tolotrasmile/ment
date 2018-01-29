import {Router} from 'express'

const router: Router = Router()
router.get('/', (req, res) => res.json({message: 'Connected to server'}))

export let route = router

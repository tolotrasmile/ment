import { server } from './server'

server.start(3000, () => console.log('Start listening at http://localhost:3000/'))

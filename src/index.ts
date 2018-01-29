import { server } from './server'
// tslint:disable-next-line:no-console
server.start(3000, () => console.log('Start listening at http://localhost:3000/'))

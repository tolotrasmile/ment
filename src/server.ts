import * as bodyParser from 'body-parser'
import * as compression from 'compression'
import * as cookieParser from 'cookie-parser'
import * as express from 'express'
import * as helmet from 'helmet'
import * as mongoose from 'mongoose'
import * as logger from 'morgan'
import { route } from './routes'

class Server {

  private express: express.Express

  constructor() {
    this.express = express()
    this.setupExpress()
  }

  public start(port: number, callback: () => void): void {
    this.express.listen(port, callback)
    this.connectMongoose()
  }

  /**
   * Setup Express server
   */
  private setupExpress(): void {
    this.middleware()
    this.routes()
  }

  /**
   * Setup Express server
   */
  private connectMongoose(): void {

    const MONGO_URI = 'mongodb://localhost/ment'

    mongoose.connect(MONGO_URI)

    mongoose.connection.on('connected', () => {
      // tslint:disable-next-line:no-console
      console.log(`Connected to database ${MONGO_URI}`)
    })

    mongoose.connection.on('error', (e) => {
      // tslint:disable-next-line:no-console
      console.log(`Error connecting to database ${MONGO_URI}`)
      // tslint:disable-next-line:no-console
      console.log(e)
    })
  }

  /**
   * Setup Express middlewares
   */
  private middleware(): void {
    this.express.use(bodyParser.urlencoded({ extended: true }))
    this.express.use(bodyParser.json())
    this.express.use(cookieParser())
    this.express.use(logger('dev'))
    this.express.use(compression())
    this.express.use(helmet())
  }

  private routes(): void {
    this.express.use(route)
  }

}

export let server = new Server()

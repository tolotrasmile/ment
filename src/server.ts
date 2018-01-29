import * as express from 'express'
import * as logger from 'morgan'
import * as helmet from 'helmet'
import * as compression from 'compression'
import * as bodyParser from 'body-parser'
import * as cookieParser from 'cookie-parser'
import * as mongoose from 'mongoose'
import { route } from './routes'

class Server {

  private express: express.Express

  constructor() {
    this.express = express()
    this.setupExpress()
  }

  /**
   * Setup Express server
   */
  private setupExpress(): void {
    this.middleware()
    this.connectMongoose()
    this.routes()
  }

  /**
   * Setup Express server
   */
  private connectMongoose(): void {

    const MONGO_URI = 'mongodb://localhost/ment'

    mongoose.connect(MONGO_URI)

    mongoose.connection.on('connected', () => {
      console.log(`Connected to database ${MONGO_URI}`)
    })

    mongoose.connection.on('error', (e) => {
      console.log(`Error connecting to database ${MONGO_URI}`)
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

  public start(port: Number, callback: Function): void {
    this.express.listen(port, callback)
  }

}

export let server = new Server()

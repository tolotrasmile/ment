import { Request, Response } from 'express'
import { UserModel } from '../models/user.model'

class UserResource {

  /**
   * Find all items
   * @param {e.Request} request
   * @param {e.Response} response
   */
  public findAll(request: Request, response: Response) {
    UserModel.find(request.query || {})
      .then((items) => response.json(items))
      .catch((error) => response.send(JSON.stringify(error)))
  }

  /**
   * Find by item id
   * @param {e.Request} request
   * @param {e.Response} response
   */
  public findById(request: Request, response: Response) {
    UserModel.findById(request.params.id).populate('todos', 'title')
      .then((user) => response.json(user))
      .catch((error) => response.send(JSON.stringify(error)))
  }

  /**
   * Create new item
   * @param {e.Request} request
   * @param {e.Response} response
   */
  public create(request: Request, response: Response) {

    const username = request.body.username
    const password = request.body.password
    const email    = request.body.email

    const user = { username, password, email }

    UserModel.create(user)
      .then(() => response.json(user))
      .catch((error) => response.send(JSON.stringify(error)))
  }

  /**
   * Update item
   * @param {e.Request} request
   * @param {e.Response} response
   */
  public update(request: Request, response: Response) {
    throw new Error('Method not implemented')
  }

}

export default new UserResource()

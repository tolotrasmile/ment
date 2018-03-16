import { Request, Response } from 'express'
import { TodoModel } from '../models/todo.model'
import { UserModel } from '../models/user.model'
import { default as handleError } from './common.resource'

class UserResource {

  /**
   * Find all items
   * @param {e.Request} request
   * @param {e.Response} response
   */
  public findAll(request: Request, response: Response) {
    UserModel.find(request.query || {})
      .populate({ path: 'todos' , select: 'title', model: 'Todo'})
      .then((items) => response.json(items))
      .catch((error) => handleError(response, error))
  }

  /**
   * Find by item id
   * @param {e.Request} request
   * @param {e.Response} response
   */
  public findById(request: Request, response: Response) {
    UserModel.findById(request.params.id)
      .then((user) => {
        if (user) {
          TodoModel.find({ user: user._id }).then((todos) => {
            response.json({...user, todos: [...todos] })
          })
        } else {
          handleError(response, {message: 'Not found'})
        }
      })
      .catch((error) => handleError(response, error))
  }

  /**
   * Create new item
   * @param {e.Request} request
   * @param {e.Response} response
   */
  public create(request: Request, response: Response) {

    const username = request.body.username
    const password = request.body.password
    const email = request.body.email

    const user = new UserModel({ username, password, email })

    UserModel.create(user)
      .then(() => response.json(user))
      .catch((error) => handleError(response, error))
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

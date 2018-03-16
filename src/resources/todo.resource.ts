import { Request, Response } from 'express'
import { TodoModel } from '../models/todo.model'
import { UserModel } from '../models/user.model'
import { default as handleError } from './common.resource'

class TodoResource {

  /**
   * Find all items
   * @param {e.Request} request
   * @param {e.Response} response
   */
  public findAll(request: Request, response: Response) {
    TodoModel.find(request.query || {})
      .populate({ path: 'user' , select: 'username -_id'})
      .then((items) => response.json(items))
      .catch((error) => handleError(response, error))
  }

  /**
   * Find by item id
   * @param {e.Request} request
   * @param {e.Response} response
   */
  public findById(request: Request, response: Response) {
    TodoModel.findById(request.params.id)
      .populate({ path: 'user' , select: 'username -_id'})
      .then((todo) => response.json(todo))
      .catch((error) => handleError(response, error))
  }

  /**
   * Create new item
   * @param {e.Request} request
   * @param {e.Response} response
   */
  public create(request: Request, response: Response) {
    const title = request.body.title
    const user = request.body.user
    const description = request.body.description

    const todo = { title, user, description, completed: false, date: new Date() }

    TodoModel.create(todo)
      .then(() => response.json(todo))
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

export default new TodoResource()

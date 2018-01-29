import { Request, Response } from 'express'
import { TodoModel } from '../models/todo.model'

class TodoResource {

  /**
   * Find all items
   * @param {e.Request} request
   * @param {e.Response} response
   */
  public findAll(request: Request, response: Response) {
    TodoModel.find(request.query || {})
      .then((items) => response.json(items))
      .catch((error) => response.send(JSON.stringify(error)))
  }

  /**
   * Find by item id
   * @param {e.Request} request
   * @param {e.Response} response
   */
  public findById(request: Request, response: Response) {
    TodoModel.findById(request.params.id)
      .then((todo) => response.json(todo))
      .catch((error) => response.send(JSON.stringify(error)))
  }

  /**
   * Create new item
   * @param {e.Request} request
   * @param {e.Response} response
   */
  public create(request: Request, response: Response) {

    const title = request.body.title
    const userId = request.body.userId
    const description = request.body.description

    const todo = { title, userId, description, completed: false, date: new Date() }

    TodoModel.create(todo)
      .then(() => response.json(todo))
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

export default new TodoResource()

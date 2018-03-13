import { Request, Response } from 'express'

export class PageController {
  public index(request: Request, response: Response) {
    response.render('index.twig', { message: '🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥Hello from Twig🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥' })
  }
}

export default new PageController()
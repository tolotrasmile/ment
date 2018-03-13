import { Response } from 'express'

export default function handleError(response: Response, error: any) {
  response.json(error)
}

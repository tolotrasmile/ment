import { Request, Response } from 'express'
import { model, Schema, Types } from 'mongoose'

export class PageController {
  public index(request: Request, response: Response) {

    const personSchema = new Schema({
      _id: Schema.Types.ObjectId,
      age: Number,
      name: String,
      stories: [{ type: Schema.Types.ObjectId, ref: 'Story' }]
    })

    const storySchema = new Schema({
      author: { type: Schema.Types.ObjectId, ref: 'Person' },
      fans: [{ type: Schema.Types.ObjectId, ref: 'Person' }],
      title: String
    })

    const Story = model('Story', storySchema)
    const Person = model('Person', personSchema)

    Person.find({})
      .populate('stories')
      .then((items) => response.render('index.twig', { message: JSON.stringify(items, null, 2) }))
      .catch(console.log)

    // response.render('index.twig', { message: '🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥Hello from Twig🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥' })
  }
}

export default new PageController()
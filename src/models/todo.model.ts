import { model, Schema } from 'mongoose'

// tslint:disable object-literal-sort-keys
const TodoSchema: Schema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now
  },
  title: {
    type: String,
    required: true
  },
  comment: {
    type: String,
    default: ''
  },
  completed: {
    type: Boolean,
    default: false,
    required: true
  },
  categoryIds: {
    type: Array,
    default: [],
    required: true
  },
  userId: {
    type: String,
    default: null
  }
})

export let TodoModel = model('Todo', TodoSchema)

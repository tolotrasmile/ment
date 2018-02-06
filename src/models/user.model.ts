import { model, Schema } from 'mongoose'

// tslint:disable object-literal-sort-keys
const UserSchema: Schema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    default: ''
  },
  email: {
    type: String,
    default: false,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true
  },
  todos: [{
    type: Schema.Types.ObjectId,
    ref: 'Todo'
  }]
})

export let UserModel = model('User', UserSchema)

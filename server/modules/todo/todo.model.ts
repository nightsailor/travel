import mongoose from 'mongoose'
import { config } from '../../config'

const { Schema } = mongoose

export interface ITodo {
  _id: string
  item: string
  completed: boolean
}

const TodoSchema = new Schema<ITodo>({
  item: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
})

const Todo: mongoose.Model<ITodo> =
  mongoose.models.Todo || mongoose.model('Todo', TodoSchema)

export default Todo

import { CustomResponse } from '../utils/customResponse'
import TodoService from '../modules/todo/todo.service'

class TodoController {
  async createTodo(req: any) {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    const result = await TodoService.createTodo(req.body)
    return new CustomResponse(200, 'todo created successfully', result)
  }
}

const TodoCtrl = new TodoController()

export { TodoCtrl }


import { CustomError } from "../../utils/customError";
import {connect} from "../../database";
import Todo, { ITodo } from "./todo.model";
import { config } from "../../config";

class TodoService {
    async createTodo(data: { item: any; completed?: any }) {
        if (!data.item) throw new CustomError("item is required");
        if (!data.completed) throw new CustomError("completed is required");
    
        await connect();
        // Check if todo exist
        let todo = await Todo.findOne({ item: data.item });
        if (todo) throw new CustomError("Item already exists");

        // check if todo is completed
        if (!data.completed) throw new CustomError("item is not completed");

        todo = new Todo(data);

        await todo.save();

        return {
          item: data.item,
          completed: data.completed,
        };
      }
}

export default new TodoService();

import BaseService from '../services/baseservice'
import db from '../database/models'
import { successResponse, successResponseWithData, errorResponse } from '../utils/response';
import { statusCodes } from '../utils/statuscode';
import { messages } from '../utils/message';


const TodoService = new BaseService(db.Todo)

class TodoController { 
  static async createTodo(req, res) {
      try {
        const todoResource = await TodoService.create(req.body);
        successResponseWithData(res, statusCodes.created, messages.created, todoResource);
        return;
      } catch(error){
        errorResponse(res, statusCodes.serverError, error.message);
        return;
      }
  }

  static async showTodo(req, res) {
     try {
        const todo = await TodoService.show({id: req.params.id});
        todo ?  successResponseWithData(res, statusCodes.success, messages.success, todo) : errorResponse(res, statusCodes.notFound, messages.notFound);
     } catch(error){
        errorResponse(res, statusCodes.serverError, error.message);
        return;
     }     
  }

  static async updateTodo(req, res) {
    try {
        const todo = await TodoService.show({id: req.params.id});
        if(todo){
            const updatedTodo = await TodoService.update({id: req.params.id}, req.body);
            successResponseWithData(res, statusCodes.success, messages.success, updatedTodo)
            return;
        }
        errorResponse(res, statusCodes.notFound, messages.notFound);
    } catch(error){
        errorResponse(res, statusCodes.serverError, error.message);
        return;
    }
  }

  static async destroyTodo(req, res) {
    try {
        const todo = await TodoService.show({id: req.params.id});
        if(todo){
            await TodoService.destroy({id: req.params.id});
            successResponse(res, statusCodes.deleted, messages.deleted);
            return;
        }
        errorResponse(res, statusCodes.notFound, messages.notFound);
    } catch(error){
        errorResponse(res, statusCodes.serverError, error.message);
        return;
    }
  }

  static async allTodos(req, res){
      const options = {attributes: ['todo_name', 'priority']}

      try {
          if(req.query.todo_name && req.query.priority){
              const { todo_name, priority } = req.query;
              const searchOptions = {
                  where: {
                    todo_name,
                    priority
              }
            }
              const todo = await TodoService.index(searchOptions);
              todo.length > 0 ? successResponseWithData(res, statusCodes.success, messages.success, todo) : errorResponse(res, statusCodes.notFound, messages.notFound);
              return;  
          }
        const todos = await TodoService.index(options);
        todos.length > 0 ?  successResponseWithData(res, statusCodes.success, messages.success, todos) : errorResponse(res, statusCodes.notFound, messages.notFound);
        return;  
      } catch(error){
        errorResponse(res, statusCodes.serverError, error.message);
        return;
      }
  }
}

export default TodoController
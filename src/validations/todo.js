import Validator from 'validatorjs';
import { errorResponse } from '../utils/response';
import { statusCodes } from '../utils/statuscode';


/**
 * Validates Todo before creation
 */
export const todoValidator = {
    async addTodo(req, res, next){
        let { todo_name,status,start_time,end_time,description,priority } = req.body;

        const rules = {
            todo_name: 'required|string',
            status: 'required|boolean',
            start_time: 'required',
            end_time: 'required',
            description: 'required|string',
            priority: 'required',
        }

        const validation = new Validator(req.body, rules);

        if(validation.fails()){
            errorResponse(res, statusCodes.badRequest, validation.errors.errors);
            return;
        }
        req.body = req.body;
        return next();
    }
}

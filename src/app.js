import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import { todoRouter } from './routes'
import { successResponse } from './utils/response';
import { statusCodes } from './utils/statuscode';
import { messages } from './utils/message';



const app = express();


const port = process.env.PORT || 1740;

//morgan for logging
app.use(logger('dev'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(todoRouter);


app.get('*', (req, res) => successResponse(res, statusCodes.success, messages.welcome));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

export default app;
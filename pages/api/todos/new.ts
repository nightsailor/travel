import { NextApiRequest, NextApiResponse } from 'next'
import { TodoCtrl } from '../../../server/controllers/todo.controller'
import { withGlobalMiddleware } from '../../../server/middlewares/global.middleware'

function createHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') return TodoCtrl.createTodo(req)
  if (req.method === 'GET')
    return TodoCtrl.createTodo({
      ...req,
      body: { item: 'new item 2', completed: true },
    })

  res.status(405).send('Method not allowed')
}

export default withGlobalMiddleware(createHandler)

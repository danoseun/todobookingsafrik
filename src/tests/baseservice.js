import {expect} from 'chai'


import BaseService from '../services/baseservice'
import db from '../database/models'
import {realTodo, fakeTodo, noNameTodo} from './testdata'


const TodoService = new BaseService(db.Todo)

describe('BaseService', () => {
  

  context('Create', () => {
    it('returns a promise of created Todo', done => {
      TodoService.create(realTodo).then(savedTodo => {
        expect(savedTodo.title).to.equal(realTodo.title)
        expect(savedTodo.description).to.equal(realTodo.description)
        expect(savedTodo.status).to.equal(realTodo.status)
        done()
      })
    })
  })

  context('Index', () => {
    it('returns all todos', done => {
      TodoService.index().then(todos => {
        expect(todos).to.be.instanceof(Array)
        expect(todos.length).to.be.above(0)
        done()
      })
    })
  })

  context('Update', () => {
    it('updates todo and returns updated todo', done => {
      TodoService.update({id: 1}, {todo_name: 'Get Moby Dick'}).then(updatedTodo => {
        expect(updatedTodo.todo_name).to.equal('Get Moby Dick')
        done()
      })
    })
  })

  context('Show', () => {
    it('returns a specified todo resource', done => {
      TodoService.show({id: 1}).then(todo => {
        expect(todo.todo_name).to.equal('Get Moby Dick')
        expect(todo).to.exist
        done()
      })
    })

    it('returns null for non-existing resource', () => {
      TodoService.show({id: 12}).then(todo => expect(todo).to.not.exist)
    })
  })

  context('Destroy', () => {
    it('destroys todo', done => {
      TodoService.destroy({id: 3}).then(todo => {
          console.log('TODO', todo);
        expect(todo).to.not.exist
        done()
      })
    })
  })
})
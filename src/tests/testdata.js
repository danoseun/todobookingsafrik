import faker from 'faker'



export const fakeTodo = {
  todo_name: faker.lorem.words(),
  description: faker.lorem.paragraph(),
}

export const noNameTodo = {
    status: faker.random.boolean(),
    start_time: '21-12-2020',
    end_time: '22-12-2020',
    description: faker.lorem.paragraph(),
    priority: 'Low'
}

export const realTodoOne = {
    todo_name: faker.lorem.words(),
    status: faker.random.boolean(),
    start_time: '21-12-2020',
    end_time: '22-12-2020',
    description: faker.lorem.paragraph(),
    priority: 'Low'
}

export const realTodoTwo = {
    todo_name: faker.lorem.words(),
    status: faker.random.boolean(),
    start_time: '21-12-2020',
    end_time: '22-12-2020',
    description: faker.lorem.paragraph(),
    priority: 'Low'
}

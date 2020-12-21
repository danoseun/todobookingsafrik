// import { v4 as uuidv4 } from 'uuid';


module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
        'Todos',
        [
            {
                todo_name: 'Mow the lawn',
                status: false,
                start_time: '21-12-2020',
                end_time: '21-12-2020',
                description: 'mowing the lawn',
                priority: 'Low',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                todo_name: 'Clean up the house',
                status: true,
                start_time: '20-12-2020',
                end_time: '21-12-2020',
                description: 'keep the house clean',
                priority: 'High',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                todo_name: 'Go to the market',
                status: false,
                start_time: '21-12-2020',
                end_time: '23-12-2020',
                description: 'stocking the house with essentials',
                priority: 'High',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                todo_name: 'Read a book',
                status: true,
                start_time: '24-12-2020',
                end_time: '25-12-2020',
                description: 'Keep your cerebrals busy crunching',
                priority: 'Medium',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ],

        {},
    ),

    down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Schedules', null, {})
};
import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

// define the expected values of the Todo response
// if the code calls TODO and the object properties invoked do not match the interface, throw an error
interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then(response => {
    const todo = response.data as Todo;

    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;

    logTodo(id, title, completed);
});

// define type annotation to each argument in the function
const logTodo = (id: number, title: string, completed: boolean) => {
    console.log(`
        The Todo with ID: ${id}
        Has a title of: ${title}
        Is it completed ? ${completed}
    `);
};
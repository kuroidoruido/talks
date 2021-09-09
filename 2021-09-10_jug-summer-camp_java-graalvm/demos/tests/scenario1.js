import { check } from 'k6';
import { createTodolistClient } from './todolist-client.js';
import { checkNotAnErrorResponse, waitRealisticDelay } from "./utils.js";

export let options = {
    duration: '50s',
    vus: 1,
};

export default function scenario1() {
    const api = createTodolistClient('http://localhost:8080', 'scenario1');
    let todos = api.getAllTodoItems();
    check(todos, {
        '[initial state] getting all todo is ok': checkNotAnErrorResponse,
        '[initial state] there is nothing to do at start': (res) => res.length === 0,
    });
    waitRealisticDelay();
    const firstTodo = api.createOneTodoItem({ description: 'thing to do' });
    check(firstTodo, {
        '[create first item] creating first todo is ok': checkNotAnErrorResponse,
        '[create first item] the returned todo is ok': (res) => 
            res.description === 'thing to do' && res.status === 'TODO' && typeof res.id === 'string',
    });
    waitRealisticDelay();
    todos = api.getAllTodoItems();
    check(todos, {
        '[after create first item] getting all todo is ok': checkNotAnErrorResponse,
        '[after create first item] new todo is present': (res) => res.length === 1 && res[0].id === firstTodo.id,
    });
    waitRealisticDelay();
    const editedFirstTodo = api.editOneTodoItem({ id: firstTodo.id, status: 'DONE' });
    check(editedFirstTodo, {
        '[edit first item] editing first todo is ok': checkNotAnErrorResponse,
        '[edit first item] the returned todo is ok': (res) => 
            res.status === 'DONE' && res.id === firstTodo.id && res.description === firstTodo.description,
    });
    waitRealisticDelay();
    todos = api.getAllTodoItems();
    check(todos, {
        '[after edit first item] getting all todo is ok': checkNotAnErrorResponse,
        '[after edit first item] fist todo is updated': (res) => res.length === 1 && res[0].id === firstTodo.id && res[0].status === editedFirstTodo.status,
    });
}
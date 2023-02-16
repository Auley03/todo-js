import './styles.css';

import {Todo, TodoList} from './classes';
import { crearTodoHtml } from './js/componentes';


export const todoList = new TodoList();

//Sintax for only one argument for each
todoList.todos.forEach(crearTodoHtml);

console.log('todos', todoList.todos);








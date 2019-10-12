import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/models/todo';
import { TODO_JPA_API_URL } from 'src/app/app-constants';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }

  // Get todos from /jpa/user/username/todos
  retrieveAllTodos(username: string) {
    return this.http.get<Todo[]>(`${TODO_JPA_API_URL}/user/${username}/todos`)
  }

  // Delete todo /jpa/user/username/todos/id
  deleteTodo(username: string, id: number) {
    return this.http.delete(`${TODO_JPA_API_URL}/user/${username}/todos/${id}`)
  }

  // Update todo /jpa/user/username/todos/id
  updateTodo(username: string, id: number, todo: Todo) {
    return this.http.put(`${TODO_JPA_API_URL}/user/${username}/todos/${id}`, todo);
  }

  // Get todo from /jpa/user/username/todos/id
  retrieveTodo(username: string, id: number) {
    return this.http.get<Todo>(`${TODO_JPA_API_URL}/user/${username}/todos/${id}`);
  }

  // Create todo at /jpa/user/username/todos
  createTodo(username: string, todo: Todo) {
    return this.http.post(`${TODO_JPA_API_URL}/user/${username}/todos`, todo);
  }
}

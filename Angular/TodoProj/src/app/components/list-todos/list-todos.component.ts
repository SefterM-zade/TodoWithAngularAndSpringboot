import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodoDataService } from 'src/app/services/data/todo-data.service';
import { Router } from '@angular/router';
import { JpaAuthenticationService } from 'src/app/services/jpa-authentication.service';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  constructor(private todoDataService: TodoDataService, private router: Router, private jpaAuthService: JpaAuthenticationService) { }

  private todos: Todo[];
  private successDeleteMessage: string;
  private username: string;

  // After success operation navigete this link
  private retrieveThisLink = 'todos';

  ngOnInit() {

    // Get username from sessionStorage
    this.username = this.jpaAuthService.getAuthenticatedUser();

    this.refreshTodos();
  }

  refreshTodos() {
    
    // Retrieve all todos from server
    this.todoDataService.retrieveAllTodos(this.username).subscribe(
      todos => {

        // If get success response 
        this.todos = todos
      }
    )
  }

  deleteTodo(id: number) {
    
    this.todoDataService.deleteTodo(this.username, id).subscribe(
      response => {

        // If todo successfuly deleted refresh page and show message
        this.refreshTodos(),
        this.successDeleteMessage = `Todo ${id} was deleted!`;
      }
    )
  }

  editTodo(id: number) {
    
    // Navigate /todos
    this.router.navigate([this.retrieveThisLink, id]);
  }

  addNewTodo() {

    // Navigate /todos
    this.router.navigate([this.retrieveThisLink, -1]);
  }

}

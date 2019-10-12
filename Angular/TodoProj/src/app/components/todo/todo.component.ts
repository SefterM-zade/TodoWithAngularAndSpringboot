import { Component, OnInit } from '@angular/core';
import { TodoDataService } from 'src/app/services/data/todo-data.service';
import { Todo } from 'src/app/models/todo';
import { ActivatedRoute, Router } from '@angular/router';
import { JpaAuthenticationService } from 'src/app/services/jpa-authentication.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private todoDataService: TodoDataService, private route: ActivatedRoute, private router: Router, private jpaAuthService: JpaAuthenticationService) { }

  private id: number;
  private todo: Todo;
  private username: string;

  private retrieveThisLink = 'todos';
  ngOnInit() {
    
    // Get id from url
    this.id = this.route.snapshot.params['id'];

    // Get username from sessionStorage
    this.username = this.jpaAuthService.getAuthenticatedUser();

    // Create empty todo
    this.todo = new Todo(this.id, '', new Date, false);
    
    // If id == -1 then create this todo
    // If id != -1 then retrieve it
    if(this.id != -1) {

      this.todoDataService.retrieveTodo(this.username, this.id).subscribe(
        todo => {
          this.todo = todo;
          }
        )
    }
  }

  saveTodo() {
    
    if(this.id == -1) {

      // Create todo
      this.todoDataService.createTodo(this.username, this.todo).subscribe(
        response => {
         
          // If success responcse come back navigate to /todos page
          this.router.navigate([this.retrieveThisLink]);
        }
      )
    }
    else {
      
      // Update todo
      this.todoDataService.updateTodo(this.username, this.id, this.todo).subscribe(
        response => {
          this.router.navigate([this.retrieveThisLink]);
        }
      )
    }
    
  }
  
}

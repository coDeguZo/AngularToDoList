import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../../services/todo.service'
import { Todo } from '../../models/Todo'

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.css']
})
export class TodoitemComponent implements OnInit {

  @Input() 
  todo: Todo;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  // Set Dynamic Classes
  setClasses(){
    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    }
    return classes
  }

  onToggle(todo){
    // Toggle in UI
    todo.completed = !todo.completed

  }

  onDelete(todo){
    console.log(todo)
  }

}

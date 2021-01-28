import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){}
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    new Todo(1, 'Learn to dance', false, new Date()),
    new Todo(2, 'Become expert in Angular', false, new Date()),
    new Todo(3, 'Visit Syria', false, new Date()),
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    console.log(this.route.snapshot.params.id);
  }

}

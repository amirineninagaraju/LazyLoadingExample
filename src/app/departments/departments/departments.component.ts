import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css'],
})
export class DepartmentsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    debugger;
    alert('I am Depatments Module');
    console.log('I am Departments Module');
  }
}

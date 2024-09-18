import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-international-patients',
  templateUrl: './international-patients.component.html',
  styleUrls: ['./international-patients.component.css']
})
export class InternationalPatientsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    debugger;
    alert("I am InternationalPatients Module");
    console.log("I am InternationalPatients Module");
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output-paren',
  templateUrl: './output-paren.component.html',
  styleUrls: ['./output-paren.component.scss']
})
export class OutputParenComponent implements OnInit {
listStudent = [];

  constructor() { }

  ngOnInit(): void {
  }

  showListStudent($event: any) {
    console.log($event);
    this.listStudent = $event;
  }

}

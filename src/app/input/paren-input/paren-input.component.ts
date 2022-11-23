import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paren-input',
  templateUrl: './paren-input.component.html',
  styleUrls: ['./paren-input.component.scss']
})
export class ParenInputComponent implements OnInit {
  listStudent = [
    {id:1, name:"chinh"} , {id:2, name : "bazo"}, {id: 3 , name:'di muon'}
  ]

  constructor() { }

  ngOnInit(): void {

  }

}

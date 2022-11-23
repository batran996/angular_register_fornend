import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {emit} from 'tsickle';

@Component({
  selector: 'app-output-child',
  templateUrl: './output-child.component.html',
  styleUrls: ['./output-child.component.scss']
})
export class OutputChildComponent implements OnInit {
  listStudennt = [
    {id : 1,name : "hung"},{id:2, name: "ra_code"}
  ]
  @Output()
  dataFormChild = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    this.dataFormChild.emit(this.listStudennt);
  }

}

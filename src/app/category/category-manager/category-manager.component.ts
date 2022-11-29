import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../service/categoryService/category.service';

@Component({
  selector: 'app-category-manager',
  templateUrl: './category-manager.component.html',
  styleUrls: ['./category-manager.component.scss']
})
export class CategoryManagerComponent implements OnInit {
  totalElements: number = 0;

  public listCategory=[];
  displayedColumns = ['demo-position', 'demo-name','demo-delete','demo-edit'];
  constructor(private categoryApi: CategoryService) { }

  ngOnInit(): void {
    this.categoryApi.getPageCategory(0).subscribe((data)=>{

      this.listCategory= data.content;
      console.log(data);

    })
  }
  nextPage(event){
    this.categoryApi.getPageCategory(event.pageIndex).subscribe((data)=>{

      this.listCategory= data.content;

    })


  }

}

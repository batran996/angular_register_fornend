import { Component, OnInit } from '@angular/core';
import {Category} from '../../model/Category';
import {CategoryService} from '../../service/categoryService/category.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss']
})
export class CreateCategoryComponent implements OnInit {
  form:any = {};
  category:Category;
  status = "please fill in the form Name Category";
  error=null;
  error1:any = {
    message:"name_valid"
  }

  error2:any = {
    message:"name_existed!"
  }
  error3:any = {
    message:"create success"
  }



  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
  }

  ngSubmit() {
    this.category = new Category(
      this.form.name
    )
    this.categoryService.createCtegory(this.category).subscribe(data =>{

    if (JSON.stringify(data)==JSON.stringify(this.error1)){
      this.error = this.error1.message
    }
    if (JSON.stringify(data)==JSON.stringify(this.error2)){
      this.error = this.error2.message
    }
      if (JSON.stringify(data)==JSON.stringify(this.error3)){
        this.error = this.error3.message
      }

    })
  }
}

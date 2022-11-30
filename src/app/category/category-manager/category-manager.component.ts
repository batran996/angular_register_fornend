import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../service/categoryService/category.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {any} from 'codelyzer/util/function';
import {Category} from '../../model/Category';

@Component({
  selector: 'app-category-manager',
  templateUrl: './category-manager.component.html',
  styleUrls: ['./category-manager.component.scss']
})
export class CategoryManagerComponent implements OnInit {

  categoryForm: FormGroup;

  totalElements: number = 0;

  public listCategory = [];
  displayedColumns = ['demo-position', 'demo-name', 'demo-delete', 'demo-edit'];
  mess = "";
  constructor(private categoryApi: CategoryService,
              private router: Router,
              private fb: FormBuilder,
              private categoryService: CategoryService) {
  }

  ngOnInit(): void {

    if (localStorage.getItem("MESSAGE_KEY")){
      this.mess = "Edit_success";
      localStorage.removeItem("MESSAGE_KEY");
    }
    this.categoryForm = this.fb.group({
      namecategory: '',
      idCategory: 0,
    });
    this.categoryApi.getPageCategory(0).subscribe((data) => {

      this.listCategory = data.content;
      console.log(data);

    });
  }

  nextPage(event) {
    this.categoryApi.getPageCategory(event.pageIndex).subscribe((data) => {
      this.listCategory = data.content;
    });
  }

  handleEdit(cate) {
    this.categoryForm.patchValue({namecategory: cate.name, idCategory: cate.id});
    console.log(this.categoryForm);
  }

  upDateCate() {
    console.log('cate formmmmm--->', this.categoryForm);
    let formEdit = new Category(this.categoryForm.value.namecategory,this.categoryForm.value.idCategory)
    console.log("foremmm edit--->",formEdit);
    this.categoryService.editCate(formEdit).subscribe(data => {
      console.log("dataaaaaaaaa--->",data);
      if (data.message == "edit_success"){
        localStorage.setItem("MESSAGE_KEY","Edit_success")
        window.location.reload();
      }

    });
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment.prod';
import {Category} from '../../model/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
private API_CATEGORYS = environment.API_LOCAL+"categories";

  constructor(private http: HttpClient) {

  }
  getPageCategory(page):Observable<any>{
    return this.http.get(`http://localhost:8080/categories?page=${page}`)
  }
  createCtegory(category:Category):Observable<Category>{
    return this.http.post<Category>(this.API_CATEGORYS,category)
  }

}

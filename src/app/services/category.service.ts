import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  url = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }
  addCategory(data: any) {
    return this.httpClient.post(this.url + "/category/addCategory", data, {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    })
  }

  getCategory() {
    return this.httpClient.get(this.url + "/category/getCategory")
  }

  updateCategory(data: any) {
    return this.httpClient.patch(this.url + "/category/updateCategory", data, {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    })
  }

  // deleteCategory(data: any) {
  //   return this.httpClient.delete(this.url + "/category/deleteBill", data)
  // }
}

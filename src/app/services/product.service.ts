import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }
  addProduct(data: any) {
    return this.httpClient.post(this.url + "/product/addProduct", data, {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    })
  }

  getProduct() {
    return this.httpClient.get(this.url + "/product/getProduct/")
  }

  getProductById(data: any) {
    return this.httpClient.get(this.url + "/product/getProduct/" + data)
  }


  updateProduct(data: any) {
    return this.httpClient.patch(this.url + "/product/updateProduct", data, {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    })
  }

  updateProductStatus(data: any) {
    return this.httpClient.patch(this.url + "/product/updateProductStatus", data, {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    })
  }

  deleteProduct(id: number) {
    return this.httpClient.delete(`${this.url}/product/deleteProduct/${id}`);
  }
}

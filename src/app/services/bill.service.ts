import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BillService {
  url = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }


  addBill(data: any) {
    return this.httpClient.post(this.url + "/bill/addBill", data, {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    })
  }

  getBill() {
    return this.httpClient.get(this.url + "/bill/getBill/")
  }

  deleteBill(data: any) {
    return this.httpClient.delete(this.url + "/bill/deleteBill", data)
  }
}

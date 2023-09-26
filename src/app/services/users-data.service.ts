import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
  url = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }
  getUser() {
    return this.httpClient.get(this.url + "/user/getAllUser/")
  }

  updateUserStatus(data: any) {
    return this.httpClient.patch(this.url + "/user/updateStatus", data, {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    })
  }
}

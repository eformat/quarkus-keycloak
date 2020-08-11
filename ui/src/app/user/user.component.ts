import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.listAdmin();
  }
  
  listAdmin() {
    console.log('>>> user');
    this.httpClient
      .get('http://localhost:8080/api/users/me')
      .subscribe(payload => console.log(payload));
  }    

}

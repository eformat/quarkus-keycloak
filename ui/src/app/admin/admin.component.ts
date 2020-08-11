import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.listAdmin();
  }

  listAdmin() {
    console.log('>>> admin');
    this.httpClient
      .get('http://localhost:8080/api/admin')
      .subscribe(payload => console.log(payload));
  }
}

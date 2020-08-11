import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.listPublic();
  }
  
  listPublic() {
    console.log('>>> public');
    this.httpClient
      .get('http://localhost:8080/api')
      .subscribe(payload => console.log(payload));
  }

}

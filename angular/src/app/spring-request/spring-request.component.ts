import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-spring-request',
  templateUrl: './spring-request.component.html',
  styleUrls: ['./spring-request.component.css']
})
export class SpringRequestComponent implements OnInit {
  message1: string = '';
  message2: string = '';

  // Normalement on évite d'importer HttpClient dans un module,
  // mais pour un petit tp on peut
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }


  requete1() {
    this.httpClient.get<any>("http://localhost:8082/api/open").subscribe(
      message => {this.message1 = message.message;}
    )
  }

  requete2() {
    this.httpClient.get<any>("http://localhost:8082/api/needAuthentication")
      .subscribe(
        message => { this.message2 = message.message; }
      );
  }
}

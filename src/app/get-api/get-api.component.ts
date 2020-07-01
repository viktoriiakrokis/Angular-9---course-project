import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-get-api',
  templateUrl: './get-api.component.html',
  styleUrls: ['./get-api.component.css']
})
export class GetApiComponent implements OnInit {
  postData;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://api.url').subscribe((data)=>{
      this.postData = data;
      console.log(data)
    })

  }

}

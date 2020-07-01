import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post-api',
  templateUrl: './post-api.component.html',
  styleUrls: ['./post-api.component.css']
})
export class PostApiComponent implements OnInit {

  constructor(private http:HttpClient) { }


  ngOnInit(): void {
  }

  onSubmit(data) {
    this.http.post('http://localhost:3000', data).subscribe((result)=>{console.log("result", result)})
    console.warn(data)
  }

}

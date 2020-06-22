import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-log-in-form',
  templateUrl: './log-in-form.component.html',
  styleUrls: ['./log-in-form.component.css']
})
export class LogInFormComponent implements OnInit {
  firstName = 'Viktoriia';
  lastName = "Krokis"
  showSecret= false;
  log = [];

  constructor() { }

  ngOnInit(): void {
  }

  onDisplayFirstName() {
  if(this.firstName = 'Viktoriia'){
    return 'NewName'
  }
  }

  onToggleDetails() {
    this.log.push(new Date());
    this.showSecret = !this.showSecret
  }
}

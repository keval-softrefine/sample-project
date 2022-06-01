import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'practice';
  userName:string = 'Sample Name';
  birthday = new Date(2001, 0, 10);
  ngOnInit(): void {
    console.log(this.userName);
  }

  consoleuserName(): void {
    console.log(this.userName);
    this.userName = 'Ads'
  }

  items = [ 'cat', 'dog']
}

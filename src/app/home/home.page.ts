import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  items: any;
  constructor(private _homeService:HomeService) { }

  ngOnInit() {
    this.getHomeContent();
  }

  getHomeContent(){
    this.items = this._homeService.getHomeContent()
    .then(tasks => {
      this.items = tasks;
      console.log(this.items[0].payload.doc.data()
      );
    })
  }

}

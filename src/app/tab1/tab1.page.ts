import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  home: FormGroup;
  constructor(private _homeService:HomeService) {
    this.home = new FormGroup({
      title: new FormControl(""),
      description: new FormControl(""),
      name: new FormControl(""),
      type: new FormControl(""),
      like: new FormControl("")
    })
  }

  post(value){
    this._homeService.createTask(value)
    .then(
      res => {
        
      }
    )
  }

}

import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {
  items = [
    {
      imageUrl: 'assets/img/lists/stadium.jpg',
      title: 'Books',
      place: 'Madison Square',
      date: '05/06/2016'
    },
    {
      imageUrl: 'assets/img/lists/stadium-3.png',
      title: 'Kirtan',
      place: 'Hooli',
      date: '15/03/2016'
    },
    {
      imageUrl: 'assets/img/lists/stadium-2.jpg',
      title: 'Video',
      place: 'Castelão',
      date: '05/12/2015'
    },
  ];
  constructor(private menu: MenuController) {
   }

  ngOnInit() {
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  delete(item) {
    alert('Deleted ' + item.title);
  }

  viewComments(item) {
    alert('Viewing comments of ' + item.title);
  }

  viewPlayers(item) {
    alert('Viewing players of ' + item.title);
  }

}

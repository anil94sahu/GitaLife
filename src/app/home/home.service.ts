import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

    constructor(public db: AngularFirestore) {}

    getHomeContent(){
        return this.db.collection('home').snapshotChanges();
      }

}
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
    private snapshotChangesSubscription: any;
    constructor(public afs: AngularFirestore) {
   
    }

    getHomeContent(){
      return new Promise<any>((resolve, reject) => {
        // let currentUser = firebase.auth().currentUser;
        this.snapshotChangesSubscription = this.afs.collection('home').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
      });
      }

}


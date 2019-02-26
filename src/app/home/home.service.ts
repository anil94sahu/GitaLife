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
      createTask(value){
        return new Promise<any>((resolve, reject) => {
          // let currentUser = firebase.auth().currentUser;
          this.afs.collection('home').add({
            title: value.title,
            description: value.description,
            name: value.name,
            type: value.type,
            like: value.like
          })
          .then(
            res => resolve(res),
            err => reject(err)
          )
        })
      }

}


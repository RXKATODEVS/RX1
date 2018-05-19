import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MessegesService {

  constructor(private db: AngularFirestore) { }

  getMesseges() {
  	return this.db.collection('Messeges').valueChanges().pipe(
  		map(items => {
      		return items.sort((a, b) => {
        		return a['timestamp']['seconds'] - b['timestamp']['seconds'];
      		})
      	})
  	)
  }

  addMessege(msg) {
    return this.db.collection("Messeges").add({
        sender: "Tokyo",
        body: msg,
        timestamp: new Date()
      })
      .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
      });
  }

}

// tap

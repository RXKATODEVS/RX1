import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable, from } from 'rxjs';
import { map, switchMap, tap, filter, scan } from 'rxjs/operators';

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
    return from(this.db.collection("Messeges").add({
        sender: "Tokyo",
        body: msg,
        timestamp: new Date()
      }))
     .pipe(
        tap(messege => console.log('Costam', messege))
      );
  }

  getLinksMessages() {
    return this.getMesseges().pipe(
        switchMap(items => {
            return items;
        }),
        filter(item => {

            if (!item || !item.body) return false;

            let replacePattern1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
            let replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;

            return item.body.match(replacePattern1)!= null || item.body.match(replacePattern2)!= null;
        }),
        scan((accumulator, item) => {
          
          let replacePattern1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
          let match1 = item.body.match(replacePattern1);

          if(match1 != null) {
            accumulator = [...accumulator, ...match1];
          }

          let replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
          let match2 = item.body.match(replacePattern2);

          if(match2 != null) {
            accumulator = [...accumulator, ...match2];
          }

          return accumulator;
          
        }, []),
        catch(error => {
          console.log(Error);
        })
      );
  }
}

// tap




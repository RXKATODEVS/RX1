import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  //items: Observable<any[]>;
  items: any;

  constructor(db: AngularFirestore) {
    db.collection('Messeges').valueChanges().subscribe(items => {

      items.sort((a, b) => {
        return a['timestamp']['seconds'] - b['timestamp']['seconds'];
      })

      console.log(items);

      this.items = items;
    });

  }
}

import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Form1Component } from 'form1/form1.component'
import { MessegesService } from './messeges.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  items: any;

  constructor(private messeges: MessegesService) {
   // this.items = messeges.getMesseges().subscribe(items => this.items = items);
    this.items = messeges.getMesseges();
  }

  addProduct($event) {
  	console.log("Nowy submit", $event)
  	this.messeges.addMessege($event.body);
  }

}

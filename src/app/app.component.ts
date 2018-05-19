import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { MessegesService } from './messeges.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  items: any;
  links: any;

  constructor(private messeges: MessegesService) {
   // this.items = messeges.getMesseges().subscribe(items => this.items = items);
    this.items = messeges.getMesseges();
    this.links = messeges.getLinksMessages();
  }

  addProduct($event) {
  	this.messeges.addMessege($event.body);
  }
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-messege',
  templateUrl: './messege.component.html',
  styleUrls: ['./messege.component.css']
})
export class MessegeComponent implements OnInit {

  @Input() public sender;
  @Input() public body;
  @Input() public date;

  constructor() { }

  ngOnInit() {
  	//console.log('Body', this.body);
  }

  ngOnChanges() {
  	//console.log('Changes', this.body);
  }

}

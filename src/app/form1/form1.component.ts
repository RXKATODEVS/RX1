import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, of } from 'rxjs';
import { filter, map, concatMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {

	public form: FormGroup;
	formSubmitSubject = new Subject();

	@Output() formSubmit = new EventEmitter();


    constructor(private formBuilder: FormBuilder) {
        this.form = formBuilder.group({
            body: ['', Validators.required]
        });

        this.formSubmitSubject
            .pipe(
                filter(() => this.form.valid),
                map(() => this.form.value),
                // mergeMap vs concatMap vs switchMap
                tap(message => this.zapisz(message)),
                concatMap(message => of(message))
            )
            .subscribe(this.formSubmit);
    }

    zapisz(messege) {
      console.log("Zapisz", messege);
    }

	ngOnInit() {
	}

}

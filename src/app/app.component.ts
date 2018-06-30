import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/of';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  nameControl: FormControl;
  fullnameControl: FormGroup;
  userListControl: FormGroup;
  trafficControl: FormControl;
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.nameControl = new FormControl('John');
    this.nameControl.valueChanges.subscribe((value) => console.log(value));
    this.nameControl.statusChanges.subscribe((status) => {
      console.log(this.nameControl.errors);
      console.log(status);
    });

    this.fullnameControl = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl()
    });

    this.fullnameControl.valueChanges.subscribe((value) => console.log(value));
     this.userListControl = this.fb.group({
       users: this.fb.array([['Alice'], ['Bob'], ['John']])
     });
     this.userListControl.valueChanges.subscribe((value) => console.log(value));
     this.trafficControl = new FormControl();
    this.trafficControl.valueChanges.subscribe((value) => console.log(value));
  }
  removeUserControl(index) {
    (this.userListControl.controls['users'] as FormArray).removeAt(index);
  }


}

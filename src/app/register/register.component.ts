import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'fp-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  currentUser: User;
  ageGroups = ['select your age group', '2-3', '4-8', '9-13', '14-18', '19-30', '31-50', '51+'];
  regForm: FormGroup;

  constructor(private userService: UserService,
              private fb: FormBuilder,
              private router: Router) {
                this.regForm = fb.group({
                  'firstname': [null],
                  'email': [null],
                  'gender': [null],
                  'ageGroup': [null]
                })
               }
  onSubmit(formValues) {
    const currentUser = this.regForm.value;
    this.currentUser = currentUser;
    console.log(this.regForm.value);
    this.currentUser.id = 1;
    this.currentUser.registered = true;
    this.currentUser.reqsStatus = {
      fruitMet: false,
      vegMet: false,
      proteinMet: false,
      grainMet: false
    };
    localStorage.setItem('User', JSON.stringify(currentUser));
    console.log(formValues);
  }

  ngOnInit(): void {
  }

}

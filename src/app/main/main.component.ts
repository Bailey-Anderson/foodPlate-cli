import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/User';

@Component({
  selector: 'fp-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  router: Router;

  @Input() user: User;

  constructor(private _router: Router) { 
    this.router = _router;
  }

  ngOnInit(): void {
  }

}

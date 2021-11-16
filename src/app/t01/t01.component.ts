import { Component, OnInit } from '@angular/core';
import { Module01Service, Person } from '../module01.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-t01',
  templateUrl: './t01.component.html',
  styleUrls: ['./t01.component.scss']
})
export class T01Component implements OnInit {

  people$!: Observable<Person[]>;
  selectedPersonId = '5a15b13c36e7a7f00cf0d7cb';

  constructor(private module01: Module01Service) { }

  ngOnInit(): void {
    this.people$ = this.module01.getPeople();
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-t02',
    templateUrl: './t02.component.html',
    styleUrls: ['./t02.component.scss'],
    standalone: false
})
export class T02Component implements OnInit {

  constructor() { }

  defaultBindingsList = [
    { value: 1, label: 'Montréal' },
    { value: 2, label: 'Québec' },
    { value: 3, label: 'Trois-Rivières', disabled: true },
    { value: 4, label: 'Sherbrooke' }
  ];

  selectedCity: any = '';

  ngOnInit() {
    this.selectedCity = this.defaultBindingsList[0];
  }

}

import { Component, OnInit } from '@angular/core';
import { Module02Service } from '../module02.service';

@Component({
  selector: 'app-t04',
  templateUrl: './t04.component.html',
  styleUrls: ['./t04.component.scss']
})
export class T04Component implements OnInit {
  constructor(public m02: Module02Service) {}

  ngOnInit(): void {
    this.m02.gCourseTitle = 'Sélectionner un cours T04';
    this.m02.gDescription = '';
  }

  public displayCourse(courseTitle: string) {
    this.m02.displayCourseFS(courseTitle);
  }

}

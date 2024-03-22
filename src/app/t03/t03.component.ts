import { Component, OnInit } from '@angular/core';
import { Module02Service } from '../module02.service';

@Component({
  selector: 'app-t03',
  templateUrl: './t03.component.html',
  styleUrls: ['./t03.component.scss']
})
export class T03Component implements OnInit {
  constructor(public m02: Module02Service) { }

  ngOnInit(): void {
    this.m02.gCourseTitle = 'Sélectionner un cours T03';
    this.m02.gDescription = '';
  }

  public displayCourse(courseTitle: string) {
    this.m02.displayCourseFS(courseTitle);
  }

}

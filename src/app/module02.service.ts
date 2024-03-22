import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Module02Service {

  gCourseTitle: string = '';
  gDescription: string = '';

  constructor() { }

  displayCourseFS(courseTitle: string) {
    this.gCourseTitle = courseTitle;
    switch (courseTitle) {
      case 'Cours T03.1':
        this.gDescription =
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis nulla vel felis mattis, quis scelerisque augue ultrices. Curabitur suscipit erat ut justo rhoncus aliquet.';
        break;
      case 'Cours T03.2':
        this.gDescription =
          'Maecenas ullamcorper ultrices libero, sit amet ullamcorper diam semper quis. In augue massa, molestie in orci et, convallis consectetur enim. Duis consequat augue ut nibh hendrerit cursus. Curabitur porttitor mauris ac dolor suscipit auctor. Cras vel lectus ante. Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla non nulla finibus sapien tempor lacinia et at est.';
        break;
      case 'Cours T04.1':
        this.gDescription =
          'Duis consectetur ultrices purus in euismod. Duis blandit diam a purus luctus, ut condimentum sem placerat. Nullam sem libero, porttitor vitae purus eu, iaculis pellentesque nibh. Donec sollicitudin tincidunt iaculis.';
        break;
      case 'Cours T04.2':
        this.gDescription =
          'Cras scelerisque lorem eu ultrices tempus. Aenean faucibus odio massa, vitae interdum ante volutpat eget. Nulla magna nulla, cursus a maximus et, volutpat nec augue. Aliquam at aliquet risus. In commodo faucibus ipsum ac lacinia.';
        break;
      default:
        this.gDescription = '';
        break;
    }
  }
}

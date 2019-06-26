import { Injectable } from '@angular/core';
@Injectable()
export class CourseNavigatorServiceClient {
  findAllCourses = () =>
    fetch
    ('https://wbdv-su119-javaserver.herokuapp.com/api/course')
      .then(response => response.json());
}

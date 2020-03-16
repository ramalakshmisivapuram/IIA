import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newnav',
  templateUrl: './newnav.component.html',
  styleUrls: ['./newnav.component.css']
})
export class NewnavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  currentCourse = 'course1';

  onCourseChange(courseId: string) {
    this.currentCourse = courseId;
  }

  scrollTo(course) {
    document.querySelector('#' + course)
    .scrollIntoView();
  }
}



import { Component, OnInit } from '@angular/core';
import { 
  Pipe, 
  PipeTransform 
} from '@angular/core';  
@Component({
  selector: 'app-course1',
  templateUrl: './course1.component.html',
  styleUrls: ['./course1.component.css']
})
export class Course1Component implements OnInit {
public date = new Date();
  constructor() { }

  ngOnInit() {
  }

}

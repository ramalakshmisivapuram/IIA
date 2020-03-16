import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/_models';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  currentUser: User;
  constructor(
    private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
}
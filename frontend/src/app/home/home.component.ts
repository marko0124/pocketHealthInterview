import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  name = '';
  userId = '';
  favoriteColor = '';

  constructor(
    private userService: UserService,
    private router: Router,
  ) {
    const details = this.userService.getUserDetails();
    if (details) {
      this.name = details.name;
      this.userId = details.userId;
      this.favoriteColor = details.favoriteColor;
    }
  }

  onFormSubmit(form: NgForm) {
    const name = form.value.name;
    const email = form.value.email;
    const favoriteColor = form.value.favoriteColor;

    this.userService.postRegister(name, email, favoriteColor).subscribe(() => {
      // Once we've received a response, take the user to the home page
      this.router.navigateByUrl('/home');
    })
  }
}

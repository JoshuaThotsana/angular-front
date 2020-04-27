import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserRegistrationService } from '../services/user-registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.sass']
})
export class RegistrationComponent implements OnInit {

  departments = ['Java','Data Science','Python','Web Development'];

  user: User = new User("","","","",0,"");

  message: any;

  constructor(private service: UserRegistrationService) { }

  ngOnInit(): void {
  }

  public registerNow() {
    this.service.doRegistration(this.user).subscribe(
      (data) => this.message = data
    );
  }

}

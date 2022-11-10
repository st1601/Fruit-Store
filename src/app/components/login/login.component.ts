import { FruitService } from './../../service/fruit.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user = {
    email: 'eve.holt@reqres.in',
    password: 'cityslicka',
  };
  isInvalid: boolean = false;
  constructor(private fruitService: FruitService, private router: Router) {}

  ngOnInit(): void {}

  login() {
    this.fruitService.login(this.user).subscribe(
      (res: any) => {
        this.router.navigate(['/home']);
        localStorage.setItem('token', res['token']);
      },
      (err) => {
        this.isInvalid = true;
      }
    );
  }
}

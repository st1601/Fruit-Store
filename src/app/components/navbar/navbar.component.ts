import { FruitService } from './../../service/fruit.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(public fruitService: FruitService) {}

  ngOnInit(): void {}
}

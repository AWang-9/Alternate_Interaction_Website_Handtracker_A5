import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  image = 'assets/images/placeholder.png'
  constructor() { }

  ngOnInit(): void {
  }

}

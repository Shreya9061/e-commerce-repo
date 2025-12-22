import { Component } from '@angular/core';
import { Carousel } from "./carousel/carousel";
import { Card } from "./card/card";

@Component({
  selector: 'app-home',
  imports: [Carousel, Card],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselService } from '../service/carousel.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements OnInit {

  public moviesList: any = [];

  constructor(private carouselService: CarouselService) {

  }

  async ngOnInit(): Promise<void> {
    var resp = await this.carouselService.get().then(resp => resp).catch(err => err);
    if (resp.status === 200) {
      this.moviesList = resp.body.results;
      console.log(this.moviesList);
    }
  }

}

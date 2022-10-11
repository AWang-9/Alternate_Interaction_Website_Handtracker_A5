import { Component, OnInit } from '@angular/core';
import { PredictionEvent } from '../prediction-event';
import { ModalService } from '../_modal';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  gesture: String = "";
  full_string: String="";
  x_only_arr: number[] = [];
  swipe: String="no swipe";
  bbox: number[] = [];

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {

  }

  prediction(event: PredictionEvent){
    this.gesture = event.getPrediction();
    this.full_string = event.getAllInfo();
    this.bbox = event.getBbox();

    if(this.x_only_arr.length == 5) {
      //get 5 samples to test if we're swiping
      console.log(this.x_only_arr);


      this.x_only_arr = [];

    }
    else{
      this.x_only_arr.push(Math.round(this.bbox[0]));
      // console.log(this.x_only_arr);
    }
    console.log(this.full_string);
  }

  openModal(id: string) {
    this.modalService.open(id)
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

}

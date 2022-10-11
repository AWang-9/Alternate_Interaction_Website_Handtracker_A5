import { Component, Inject, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { PredictionEvent } from '../prediction-event';
import { ModalService } from '../_modal';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-recipes-page',
  templateUrl: './recipes-page.component.html',
  styleUrls: ['./recipes-page.component.css']
})
export class RecipesPageComponent implements OnInit {
  gesture: String = "";
  predictions:String[] = [];
  modal_id:String = "";
  modalOpen = false;
  goBack = false;
  predict_num = 4;
  constructor(private __location: Location, private modalService: ModalService, @Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
  }

  home(){
    this.__location.go('home');
  }

  back(){
    // console.log('go back!');
    this.__location.back();
  }

  forward(){
    this.__location.forward();
  }

  scrollDown(){
    var currentYPos = window.scrollY;
    console.log(currentYPos);
    window.scrollBy({top: 300, left: 0, behavior: 'smooth'})

  }

  scrollUp(){
    var currentYPos = window.scrollY;
    console.log(currentYPos);
    window.scrollBy({top: -300, left: 0, behavior: 'smooth'})
  }

  quickJumpInstructions(){
    this.document.getElementById("instructions")?.scrollIntoView({});
  }

  quickJumpSearchbar(){
    this.document.getElementById("main_navbar")?.scrollIntoView({});
    this.document.getElementById("searchbar")?.focus();
  }

  openIngredientsModal(id: string){
    this.modalService.open(id);
    this.modalOpen = true;
  }

  closeIngredientsModal(id: string){
    this.modalService.close(id);
    this.modalOpen = false;
  }


  allEqual(array:String[]) {
    return array.every(v => v == array[0]);
  }

  // prediction(event: PredictionEvent){
  //   //you have to get this.predict_num predictions of "closed hand" before acting
  //   //you have to get this.predict_num predictions of "open hand" before acting
  //   //you have to get this.predict_num predictions of "hand pointing" before acting
  //   //this is because the thing is too sensitive otherwise

  //   var prediction = event.getPrediction();

  //   if(prediction == 'Closed Hand' || prediction == 'Open Hand' || prediction == 'Hand Pointing') {
  //     //you have to get 3 predictions total before acting
  //     console.log(this.predictions);
  //     if(this.predictions.length == this.predict_num) {
  //       this.gesture = this.predictions[0];
  //       this.predictions = [];
  //     }
  //     else {
  //       if(this.predictions.length == 0) {
  //         this.predictions.push(prediction);
  //       }
  //       else {
  //         //prediction must be equal to what's currently there
  //         if(prediction != this.predictions[0]){
  //           //it's not the same, reset
  //           this.predictions = [];
  //         }
  //         else {
  //           this.predictions.push(prediction);
  //         }
  //       }
  //     }
  //   }
  //   else {
  //     this.gesture = prediction;
  //   }

  //   console.log('current gesture: ', this.gesture);

  //   if(this.gesture == 'Two Open Hands') {
  //     this.openIngredientsModal('ingred-modal-1');
  //   }

  //   if(this.gesture == 'Closed Hand') {
  //     if(this.modalOpen == true) {
  //       this.closeIngredientsModal('ingred-modal-1');
  //     }
  //     else {
  //       //make them hold the closed hand for X seconds before going
  //       this.back();
  //     }
  //   }

  //   if(this.gesture == 'Hand Pointing'){
  //     this.quickJumpSearchbar();
  //   }

  //   if(this.gesture == 'Open Hand'){
  //     console.log('open hand!');
  //     if(this.modalOpen != true) {
  //       this.forward();
  //     }
  //   }

  //   if(this.gesture == 'Two Hands Pointing') {
  //     this.quickJumpInstructions();
  //   }

  //   if(this.gesture == 'One Closed One Open'){
  //     this.scrollDown();
  //   }

  //   if(this.gesture == 'One Point One Open'){
  //     this.scrollUp();
  //   }

  //   this.gesture = '';


  // }

}
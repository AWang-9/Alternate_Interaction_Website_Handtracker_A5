import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-recipe-ingredients',
  templateUrl: './recipe-ingredients.component.html',
  styleUrls: ['./recipe-ingredients.component.css']
})
export class RecipeIngredientsComponent implements OnInit {

  ingredients:string[] = ["1 1/2 cups granulated sugar",
  "3/4 cup all-purpose flour",
  "2/3 cup cocoa powder, sifted if lumpy",
  "1/2 cup powdered sugar, sifted if lumpy",
  "1/2 cup dark chocolate chips",
  "3/4 teaspoons sea salt",
  "2 large eggs",
  "1/2 cup canola oil or extra-virgin olive oil",
  "2 tablespoons water",
  "1/2 teaspoon vanilla"];
  constructor() { }

  ngOnInit(): void {
  }

  check(){
    console.log('an ingredient got clicked!');
  }

}

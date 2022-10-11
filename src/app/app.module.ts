import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiComponent } from './ui/ui.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HandtrackerComponent } from './handtracker/handtracker.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RecipesPageComponent } from './recipes-page/recipes-page.component';
import { RecipeIngredientsComponent } from './recipe-ingredients/recipe-ingredients.component';
import { RecipeInstructionsComponent } from './recipe-instructions/recipe-instructions.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from './_modal';
import { CarouselComponent } from './carousel/carousel.component';
import { CardBasicComponent } from './card-basic/card-basic.component';
import { AllRecipesPageComponent } from './all-recipes-page/all-recipes-page.component';
import { ReferencesPageComponent } from './references-page/references-page.component';
// import { IngredientModalComponent } from './ingredient-modal/ingredient-modal.component';
// import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    UiComponent,
    HomePageComponent,
    HandtrackerComponent,
    NavbarComponent,
    RecipesPageComponent,
    RecipeIngredientsComponent,
    RecipeInstructionsComponent,
    FooterComponent,
    CarouselComponent,
    CardBasicComponent,
    AllRecipesPageComponent,
    ReferencesPageComponent,
    // IngredientModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

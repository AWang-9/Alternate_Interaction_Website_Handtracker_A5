import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllRecipesPageComponent } from './all-recipes-page/all-recipes-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RecipesPageComponent } from './recipes-page/recipes-page.component';
import { ReferencesPageComponent } from './references-page/references-page.component';

const routes: Routes = [
    { path: '', component: HomePageComponent},
    {path: 'brownie_recipe', component: RecipesPageComponent},
    {path: 'all_recipes', component: AllRecipesPageComponent},
    {path: 'reference', component: ReferencesPageComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

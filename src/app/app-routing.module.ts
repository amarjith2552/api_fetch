import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ViewrecipeComponent } from './viewrecipe/viewrecipe.component';

const routes: Routes = [
  {
  
    path:'',component: RecipesComponent
  },
  {
    path:'view/:id',component:ViewrecipeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

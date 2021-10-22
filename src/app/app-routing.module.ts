import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecipesComponent } from './recipes/recipes.component';
import { Shawarma1Component } from './recipes/shawarma1/shawarma1.component';
import { SubscribeComponent } from './subscribe/subscribe.component';

const routes: Routes = [
  {
    path:"recipes",
    children:
    [
      {
        path:"shawarma1",
        component:Shawarma1Component
      },

    ]
   
  },

  {
    path:"home",
    component:HomeComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

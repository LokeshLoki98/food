import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocialmediaComponent } from './socialmedia/socialmedia.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RecipesComponent } from './recipes/recipes.component';
import { SubscribeComponent } from './subscribe/subscribe.component';

import { Shawarma1Component } from './recipes/shawarma1/shawarma1.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SocialmediaComponent,
    NavbarComponent,
    RecipesComponent,
    SubscribeComponent,
   
    Shawarma1Component,
        HomeComponent,
    
],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

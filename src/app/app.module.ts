import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserService } from './services/user.service';
import { MainComponent } from './main/main.component';
import { HomeBtnComponent } from './home-btn/home-btn.component';
import { PlateComponent } from './plate/plate.component';
import { MessageComponent } from './message/message.component';
import { FoodGroupsModule } from './food-groups/food-groups.module';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [ AppComponent, HeaderComponent, FooterComponent, MainComponent, HomeBtnComponent, PlateComponent, MessageComponent, NavComponent ],
  imports: [
    CommonModule,
    BrowserModule,
    FoodGroupsModule
  ],
  bootstrap: [ AppComponent ],
  providers: [ UserService ]
})

export class AppModule { }


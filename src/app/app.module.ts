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
import { DefaultComponent } from './components/default/default.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { FarmersMarketComponent } from './farmers-markets/farmers-market.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TodaysGoalComponent } from './todays-goal/todays-goal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    HomeBtnComponent,
    PlateComponent,
    MessageComponent,
    NavComponent,
    RegisterComponent,
    DefaultComponent,
    FarmersMarketComponent,
    ExercisesComponent,
    TodaysGoalComponent,
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    BrowserModule,
    FoodGroupsModule,
    ReactiveFormsModule,
  ],
  bootstrap: [AppComponent],
  providers: [UserService],
})
export class AppModule {}

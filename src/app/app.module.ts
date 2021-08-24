import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserService } from './services/user.service';
import { MainComponent } from './main/main.component';
import { HomeBtnComponent } from './home-btn/home-btn.component';

@NgModule({
  declarations: [ AppComponent, HeaderComponent, FooterComponent, MainComponent, HomeBtnComponent ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  bootstrap: [ AppComponent ],
  providers: [ UserService ]
})

export class AppModule { }


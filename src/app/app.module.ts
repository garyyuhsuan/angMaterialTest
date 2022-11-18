import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

//HomePageModule
import {HomePageModule} from './home-page/home-page.module'

//FlexLayout
import { FlexLayoutModule } from '@angular/flex-layout';

//Component
import { NavigationComponent } from './navigation/navigation.component';

//HomePage
// import { HomePageComponent } from './home-page/home-page.component';
// import { HeaderComponent } from './home-page/header/header.component';
// import { AsideComponent } from './home-page/aside/aside.component';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    //HomePage
    // HomePageComponent,
    // HeaderComponent,
    // AsideComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule, 
    //HomePageModule
    HomePageModule,
    //FlexLayout
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

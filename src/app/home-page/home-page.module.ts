import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';

// Component included
import { HeaderComponent } from './header/header.component';
import { AsideComponent } from './aside/aside.component';
import { CalenderComponent } from './calender/calender.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { LogBookComponent } from './log-book/log-book.component';

// Style customized 
import { CustomMaterialModule } from './custom-material.module';

// Mat
import { MatSliderModule } from '@angular/material/slider';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';



@NgModule({
  
  imports: [
    CommonModule,
    HomePageRoutingModule,
    CustomMaterialModule,

    // Mat
    MatSliderModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule, 
    
  ],
  declarations: [
    HomePageComponent,
    HeaderComponent,
    AsideComponent,
    CalenderComponent,
    ToDoListComponent,
    LogBookComponent
  ],

})
export class HomePageModule { }

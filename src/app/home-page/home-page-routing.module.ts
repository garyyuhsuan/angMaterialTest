import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page.component';
import {ToDoListComponent} from './to-do-list/to-do-list.component'
import {LogBookComponent} from './log-book/log-book.component'
import {CalenderComponent} from './calender/calender.component'


const routes: Routes = [
  { path: 'home', component: HomePageComponent, children: [
    { path: '', redirectTo: 'calender', pathMatch: 'full' },
    { path: 'calender', component: CalenderComponent },
    { path: 'log-book', component: LogBookComponent },
    { path: 'to-do-list', component: ToDoListComponent },
    ] 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }

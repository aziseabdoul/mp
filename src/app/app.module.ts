import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ManagerComponent } from './manager/manager.component';

export const appRouteList: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
      path: 'register',
      component: RegisterComponent
    },
    {
      path: 'calendar',
      component: CalendarComponent
    },
    {
      path: 'manager',
      component: ManagerComponent
    }
    
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CalendarComponent,
    ManagerComponent
  ],
  exports: [
        RouterModule
    ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouteList),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

export const appRouteList: Routes = [
    {
        path: 'login',
        component: LoginComponent
    }
    
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  exports: [
        RouterModule
    ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouteList)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

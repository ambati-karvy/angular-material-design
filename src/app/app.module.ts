import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WelcomeMaterialModule } from './welcome-material/welcome-material.module';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes} from '@angular/router';
import { LayoutModule } from './layout/layout.module';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  {path: '',loadChildren:'./layout/layout.module#LayoutModule'},
  {path: 'login',component: LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    WelcomeMaterialModule,
    LayoutModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

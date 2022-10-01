import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: 'main', 
    loadChildren: () => import('./main/main.module').then(x => x.MainModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'main' 
  },
  {
    path: '**',
    redirectTo: 'main'
  }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

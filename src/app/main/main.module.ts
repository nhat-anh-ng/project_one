import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AkademikListComponent } from './containers/akademik-list/akademik-list.component';
import { SafePipe } from './pipes/safe.pipe';
import { AkademikCardComponent } from './components/akademik-card/akademik-card.component';



@NgModule({
  declarations: [
    AkademikListComponent,
    SafePipe,
    AkademikCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AkademikListComponent
  ]
})
export class MainModule { }

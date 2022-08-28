import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AkademikListComponent } from './containers/akademik-list/akademik-list.component';
import { SafePipe } from './pipes/safe.pipe';
import { AkademikCardComponent } from './components/akademik-card/akademik-card.component';
import { AkademikSingleComponent } from './containers/akademik-single/akademik-single.component';
import { AkademikFormComponent } from './components/akademik-form/akademik-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AkademikListComponent,
    SafePipe,
    AkademikCardComponent,
    AkademikSingleComponent,
    AkademikFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    AkademikListComponent, AkademikSingleComponent
  ]
})
export class MainModule { }

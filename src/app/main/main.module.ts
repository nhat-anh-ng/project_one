import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AkademikListComponent } from './containers/akademik-list/akademik-list.component';
import { AkademikNewComponent } from './containers/akademik-new/akademik-new.component';
import { AkademikInfopageComponent } from './containers/akademik-infopage/akademik-infopage.component';
import { RouterModule, Routes } from '@angular/router';
import { SafePipe } from './pipes/safe.pipe';
import { AkademikCardComponent } from './components/akademik-card/akademik-card.component';
import { AkademikFormComponent } from './components/akademik-form/akademik-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AkademikDetailsComponent } from './components/akademik-details/akademik-details.component';
import { SearchFilterPipe } from './pipes/search-filter.pipe';






export const routes: Routes = [
  { path: 'akademikList', component:AkademikListComponent },
  { path: 'registration', component:AkademikNewComponent },
  { path: 'akademikList/:id', component:AkademikInfopageComponent},
  { path: '', pathMatch: 'full', redirectTo: 'akademikList'}
]

@NgModule({
  declarations: [
    AkademikListComponent,
    SafePipe,
    SearchFilterPipe,
    AkademikCardComponent,
    AkademikNewComponent,
    AkademikFormComponent,
    AkademikInfopageComponent,
    AkademikDetailsComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    AkademikListComponent, AkademikNewComponent
  ]
})
export class MainModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'

import { AkademikListComponent } from './containers/akademik-list/akademik-list.component';
import { AkademikNewComponent } from './containers/akademik-new/akademik-new.component';
import { AkademikInfopageComponent } from './containers/akademik-infopage/akademik-infopage.component';
import { AkademikCardComponent } from './components/akademik-card/akademik-card.component';
import { AkademikFormComponent } from './components/akademik-form/akademik-form.component';
import { AkademikDetailsComponent } from './components/akademik-details/akademik-details.component';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { SafePipe } from './pipes/safe.pipe';

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
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatExpansionModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    FlexLayoutModule,
    RouterModule.forChild(routes)
  ]
})
export class MainModule { }

import { Component, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Akademik } from '../../models/akademik.model';
import { AkademikService } from '../../services/akademik.service';

@Component({
  selector: 'app-akademik-card',
  templateUrl: './akademik-card.component.html',
  styleUrls: ['./akademik-card.component.scss']
})
export class AkademikCardComponent {
  
  @Input() dorms: Akademik[] | null = [];
 
  constructor() {}
}

import { Component, Input } from '@angular/core';
import { Akademik } from '../../models/akademik.model';

@Component({
  selector: 'app-akademik-card',
  templateUrl: './akademik-card.component.html',
  styleUrls: ['./akademik-card.component.scss']
})
export class AkademikCardComponent {
  @Input() akademik!: Akademik;
  constructor() { }

}

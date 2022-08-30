import { Component, Input, Output } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Akademik } from '../../models/akademik.model';
import { AkademikService } from '../../services/akademik.service';

@Component({
  selector: 'app-akademik-card',
  templateUrl: './akademik-card.component.html',
  styleUrls: ['./akademik-card.component.scss']
})
export class AkademikCardComponent {
  @Input() akademik!: Akademik;
  @Input() index: number | undefined;
  akademikList: Akademik[] = [];
  constructor(private akademikService: AkademikService) {}

  viewDetails(akademikDetails: Akademik){
    this.akademikService.akademikDetails(akademikDetails)
    console.log(akademikDetails)
  }
}

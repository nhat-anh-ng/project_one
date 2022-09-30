import { Component, Input, OnInit } from '@angular/core';
import { Akademik } from '../../models/akademik.model';

@Component({
  selector: 'app-akademik-details',
  templateUrl: './akademik-details.component.html',
  styleUrls: ['./akademik-details.component.scss']
})
export class AkademikDetailsComponent implements OnInit {
  @Input() akademik!: Akademik;
  @Input() index!: number;
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Akademik } from '../../models/akademik.model';
import { AkademikService } from '../../services/akademik.service';
@Component({
  selector: 'app-akademik-list',
  templateUrl: './akademik-list.component.html',
  styleUrls: ['./akademik-list.component.scss']
})
export class AkademikListComponent implements OnInit {
  akademikList!: Akademik[];
  constructor(private akademikService: AkademikService) { }

  ngOnInit(): void {
    this.akademikService.read().subscribe((akademikList: Akademik[]) => (this.akademikList = akademikList))
  }

  trackById(i: number, value: Akademik) {
    return value.id;
  }
}

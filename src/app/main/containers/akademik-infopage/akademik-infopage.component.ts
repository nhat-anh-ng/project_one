import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import { Akademik } from '../../models/akademik.model';
import { AkademikService } from '../../services/akademik.service';

@Component({
  selector: 'app-akademik-infopage',
  templateUrl: './akademik-infopage.component.html',
  styleUrls: ['./akademik-infopage.component.scss']
})
export class AkademikInfopageComponent implements OnInit {
  akademik!: Akademik;
  akademikList!: Akademik[];
  akademikId: string | null | undefined;
  akademikDetails: Akademik | undefined;
 
  constructor(private akademikService: AkademikService, private route: ActivatedRoute) {
    
   }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.get('id')) {
        this.akademikService.getAkademikById(+params.get('id')!)
          .subscribe(x => {
            this.akademik = x;
          })
      }})
  }

  trackById(i: number, value: Akademik) {
    return value.id;
  }
}

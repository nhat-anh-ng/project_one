import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { routes } from '../../main.module';
import { Akademik } from '../../models/akademik.model';
import { AkademikService } from '../../services/akademik.service';
@Component({
  selector: 'app-akademik-list',
  templateUrl: './akademik-list.component.html',
  styleUrls: ['./akademik-list.component.scss']
})
export class AkademikListComponent implements OnInit {
  akademikList!: Akademik[];
  akademik$!: Observable<Akademik>;
  constructor(private akademikService: AkademikService, private route: ActivatedRoute) { 
   
  }

  ngOnInit(): void {
    this.akademikService.read().subscribe((akademikList: Akademik[]) => (this.akademikList = akademikList))
    const akademikId = this.route.snapshot.paramMap.get('id');
    this.akademik$ = this.akademikService.getAkademikById(0)
  }

  trackById(i: number, value: Akademik) {
    return value.id;
  }

  
}

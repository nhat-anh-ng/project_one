import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Akademik } from '../../models/akademik.model';
import { AkademikStore } from '../../services/akademik.store';
@Component({
  selector: 'app-akademik-list',
  templateUrl: './akademik-list.component.html',
  styleUrls: ['./akademik-list.component.scss']
})
export class AkademikListComponent implements OnInit {
  akademikList!: Akademik[];
  akademikList$!: Observable<Akademik[]>;
  
  constructor(private akademikStore: AkademikStore) { 
   
  }

  ngOnInit(): void {
     this.reloadDorms()
  }

  reloadDorms(){
    this.akademikList$ = this.akademikStore.showDorms();
  }
  
}

import { Component, OnInit } from '@angular/core';
import { Akademik } from '../../models/akademik.model';
import { AkademikService } from '../../services/akademik.service';

@Component({
  selector: 'app-akademik-single',
  templateUrl: './akademik-single.component.html',
  styleUrls: ['./akademik-single.component.scss']
})
export class AkademikSingleComponent implements OnInit {

  constructor(private akademikService: AkademikService) { }

  ngOnInit(): void {
  }

  onCreate(akademik: Akademik){
    this.akademikService.create(akademik).subscribe(() => console.log("created new item"));
  }

}

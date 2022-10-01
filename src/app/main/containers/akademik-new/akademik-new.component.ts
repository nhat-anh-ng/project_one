import { Component, OnInit } from '@angular/core';
import { Akademik } from '../../models/akademik.model';
import { AkademikService } from '../../services/akademik.service';

@Component({
  selector: 'app-akademik-new',
  templateUrl: './akademik-new.component.html',
  styleUrls: ['./akademik-new.component.scss']
})
export class AkademikNewComponent implements OnInit {
  showMessage = false;
  constructor(private akademikService: AkademikService) { }

  ngOnInit(): void {
  }

  onCreate(akademik: Akademik){
    this.akademikService.create(akademik).subscribe();
    this.showMessage = true;
  }

   onClose() {
    this.showMessage = false;
  }

}

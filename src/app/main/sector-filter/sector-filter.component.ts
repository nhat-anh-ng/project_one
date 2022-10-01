import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { BehaviorSubject } from 'rxjs';
import { AkademikStore } from '../services/akademik.store';


@Component({
  selector: 'app-sector-filter',
  templateUrl: './sector-filter.component.html',
  styleUrls: ['./sector-filter.component.scss']
})
export class SectorFilterComponent implements OnInit {
  sectorForm!: FormGroup;  

  @ViewChild('selector') mySelect: any;
  @ViewChild('matRef') matRef!: MatSelect;

  @Output() selectedSectorSubject = new BehaviorSubject<string>('');
  constructor(public fb: FormBuilder, private akademikStore: AkademikStore) { 
  
    this.sectorForm = this.fb.group({
    sector: new FormControl(''),
    }) }

  ngOnInit(): void {
  }

   onSectorSelect(event:Event){
    let selectedSector = this.sectorForm.value.sector
    this.selectedSectorSubject.next(selectedSector);
    console.log(selectedSector)
    this.mySelect.close();
    this.clearSector();
  }
  clearSector() {
  this.matRef.options.forEach((data: MatOption) => data.deselect());
  }
}

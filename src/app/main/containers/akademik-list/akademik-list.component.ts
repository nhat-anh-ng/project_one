import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';
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
  filteredDorms$!: Observable<Akademik[]>;
  filteredDistrict$!: Observable<Akademik[]>;
  @ViewChild('selector') mySelect: any;
  @ViewChild('select') select: any;
  @ViewChild('matRef') matRef!: MatSelect;
  @ViewChild('mat') mat!: MatSelect;

  sectorForm!: FormGroup;  

  selectedSectorSubject = new BehaviorSubject<string>('');
  selectedSectorAction$ = this.selectedSectorSubject.asObservable();
  
  selectedDistrictSubject = new BehaviorSubject<string>('');
  selectedDistrictAction$ = this.selectedDistrictSubject.asObservable();
  
  constructor(private akademikStore: AkademikStore, public fb: FormBuilder) { 
  
    this.sectorForm = this.fb.group({
    sector: new FormControl(''),
    district: new FormControl(''),
    })
  }
  

  ngOnInit(): void {
     this.reloadDorms();
  }

  reloadDorms(){
    this.akademikList$ = this.akademikStore.showDorms();
    this.filteredDorms$ = combineLatest([
      this.akademikList$, this.selectedSectorAction$, this.selectedDistrictAction$
    ]).pipe(
      map(([dorms, selected]) => {
        return dorms.filter((dorm) => selected ? dorm.sector === selected : true && selected ? dorm.district === selected : true)
      })
    )

    this.filteredDistrict$ = combineLatest([
      this.akademikList$, this.selectedDistrictAction$
    ]).pipe(
      map(([dorms, selected]) => {
        return dorms.filter((dorm) => selected ? dorm.district === selected : true)
      })
    )
  }

  onSectorSelect(event:Event){
    let selectedSector = this.sectorForm.value.sector
    this.selectedSectorSubject.next(selectedSector);
    console.log(selectedSector)
    this.mySelect.close();
    this.clearSector();
  }

  onDistrictSelect(event:Event){
    let selectedDistrict = this.sectorForm.value.district
    this.selectedDistrictSubject.next(selectedDistrict);
    console.log(selectedDistrict)
    this.select.close();
    this.clearDistrict();
  }

  clearSector() {
  this.matRef.options.forEach((data: MatOption) => data.deselect());
  }

  clearDistrict() {
  this.mat.options.forEach((data: MatOption) => data.deselect());
  }

}

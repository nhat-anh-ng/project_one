import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Akademik } from '../../models/akademik.model';

@Component({
  selector: 'app-akademik-form',
  templateUrl: './akademik-form.component.html',
  styleUrls: ['./akademik-form.component.scss']
})
export class AkademikFormComponent implements OnInit{
  @Output() create: EventEmitter<Akademik> = new EventEmitter<Akademik>();
  akademikForm!: FormGroup;

  constructor() { }
  ngOnInit(): void {
    this.akademikForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      sector: new FormControl('public', [Validators.required]), 
      url: new FormControl(''),
    })
  }

  onSubmit(){
    this.create.emit(this.akademikForm.value)
  }

}

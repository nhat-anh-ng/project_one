import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Akademik } from '../../models/akademik.model';

@Component({
  selector: 'app-akademik-form',
  templateUrl: './akademik-form.component.html',
  styleUrls: ['./akademik-form.component.scss']
})
export class AkademikFormComponent implements OnInit{
  @Output() create: EventEmitter<Akademik> = new EventEmitter<Akademik>();

  title = 'ReactiveForm';
  akademikForm!: FormGroup;

  constructor() { }
  ngOnInit(): void {
    this.akademikForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, Validators.required),
      sector: new FormControl('public'),
      url: new FormControl(null),
    })
  }

  onSubmit(){
    this.create.emit(this.akademikForm.value)
  }

}

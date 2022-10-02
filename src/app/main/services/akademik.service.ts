import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Akademik } from '../models/akademik.model';
import { Observable, of, shareReplay, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AkademikService {
  public akademikList: Akademik[] = [];
  public akademik!: Akademik;
  constructor(private http: HttpClient, private router: Router) { }

  getAkademikById(id:number): Observable<Akademik>{
    const urlById = `${'http://localhost:3000/akademikList'}/${id}`;
    return this.http.get<Akademik>(urlById);
  }

  create(payload: Akademik){
    return this.http.post<Akademik>(`http://localhost:3000/akademikNew`, payload)
      .pipe(
        tap((akademik) => {
          this.akademikList = [...this.akademikList, akademik]
        })
      )
  }
}

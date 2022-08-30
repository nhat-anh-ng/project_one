import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Akademik } from '../models/akademik.model';
import { Observable, of, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AkademikService {
  public akademikList: Akademik[] = [];
  public akademik!: Akademik;
  constructor(private http: HttpClient, private router: Router) { }

  read(){
    if(this.akademikList.length){
      return of(this.akademikList);
    }
    return this.http.get<Akademik[]>(`http://localhost:3000/akademikList`)
      .pipe(tap((akademikList) => (this.akademikList = akademikList)))
  }

  getAkademikById(id:number): Observable<Akademik>{
    const urlById = `${'http://localhost:3000/akademikList'}/${id}`;
    return this.http.get<Akademik>(urlById);
  }
 
    akademikDetails(akademik: Akademik){
    const akademikId = akademik ? akademik.id : null;
    this.router.navigate(['/akademikList', {id: akademikId}])
    console.log(akademikId)
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

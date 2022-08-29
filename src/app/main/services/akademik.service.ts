import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Akademik } from '../models/akademik.model';
import { of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AkademikService {
  private akademikList: Akademik[] = [];
  constructor(private http: HttpClient) { }

  read(){
    if(this.akademikList.length){
      return of(this.akademikList);
    }
    return this.http.get<Akademik[]>(`http://localhost:3000/akademikList`)
      .pipe(tap((akademikList) => (this.akademikList = akademikList)))
  }

  create(payload: Akademik){
    return this.http.post<Akademik>(`http://localhost:3000/newAkademik`, payload)
      .pipe(
        tap((akademik) => {
          this.akademikList = [...this.akademikList, akademik]
        })
      )
  }
}

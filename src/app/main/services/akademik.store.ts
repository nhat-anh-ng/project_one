import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, map, Observable, tap } from "rxjs";
import { Akademik } from "../models/akademik.model";

@Injectable({
    providedIn: 'root'
})

export class AkademikStore {
    private subject = new BehaviorSubject<Akademik[]>([]);
    dorms$: Observable<Akademik[]> = this.subject.asObservable();
    public readonly server = ' http://localhost:3000/akademikList';
    
    constructor(private http: HttpClient){
        this.loadAllDorms();
    }

    loadAllDorms() {
        const loadDorms$ = this.http.get<Akademik[]>(`${this.server}`)
            .pipe(
                map((res) => res),
                tap(dorms => this.subject.next(dorms))
            );
        loadDorms$.subscribe();
    }

    showDorms(): Observable<Akademik[]>{
        return this.dorms$.pipe(
            map(dorms => dorms)
        )
    }
}
import { Component, Input } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import { Akademik } from '../../models/akademik.model';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-akademik-card',
  templateUrl: './akademik-card.component.html',
  styleUrls: ['./akademik-card.component.scss']
})
export class AkademikCardComponent {
  @Input() dorms: Akademik[] | null = [];

  cols$: Observable<number> = this.breakpointObserver
  .observe([Breakpoints.Small, Breakpoints.XSmall, Breakpoints.Medium])
  .pipe(
    map((result) => {
      if (result.breakpoints[Breakpoints.XSmall]) {
        return 1;
      } else if (result.breakpoints[Breakpoints.Small]) {
        return 2;
      } else if (result.breakpoints[Breakpoints.Medium]) {
        return 2
      } else {
        return 3
      }
    }),
    shareReplay()
  );
 
  constructor(private breakpointObserver: BreakpointObserver) {}
}

import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Akademik } from '../models/akademik.model';

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer){}

  transform(url:string): any {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url)
  }

}

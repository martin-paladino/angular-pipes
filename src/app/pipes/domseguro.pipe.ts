import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
//pipe que permite pasar la seguridad de un url de confianza
@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor(private domSanitizer: DomSanitizer){}

  transform(value: string, ...args: unknown[]): SafeResourceUrl {

    return this.domSanitizer.bypassSecurityTrustResourceUrl(value);
  }

}

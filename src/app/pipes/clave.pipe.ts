import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'clave'
})
export class ClavePipe implements PipeTransform {

  transform(value: string, mostrar: boolean): string {
    if(mostrar) 
    {
      return "*".repeat(value.length);
    } else {
      return value;
    }
  }

}

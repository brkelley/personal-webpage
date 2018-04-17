import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (typeof value === 'string') {
      return value.split('-').map(word => word.substring(0, 1).toUpperCase() + word.substring(1)).join('-');
    } else {
      return value;
    }
  }
}

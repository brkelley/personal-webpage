import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'dateConverter'
})
export class DateConverterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (typeof value === 'string') {
      const date = moment(value, 'MM-YYYY');
      if (date.format() === 'Invalid date') {
        return value;
      }
      if (args) {
        return date.format(args);
      } else {
        return value;
      }
    }
    return value;
  }
}

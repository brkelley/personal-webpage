import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneNumber'
})
export class PhoneNumberPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let phoneString = value;
    if (typeof value === 'number') {
      phoneString = value.toString();
    }
    if (typeof phoneString === 'string' && phoneString.length === 10) {
      return '(' + phoneString.substr(0, 3) + ') ' + phoneString.substr(3, 3) + '-' + phoneString.substr(6, 4);
    } else {
      return value;
    }
  }
}

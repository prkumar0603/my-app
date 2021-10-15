import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sqr'
})
export class MySquarePipe implements PipeTransform {

  // this class implements PipeTransform and has transfor method is called internally on calling pipe.
  transform(value: number, ...args: any[]): number {
    return value *value;
  }

}

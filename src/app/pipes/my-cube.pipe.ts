import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cube'
})
export class MyCubePipe implements PipeTransform {

  transform(value: number, ...args: any[]): number {
    return value * value * value;
  }

}

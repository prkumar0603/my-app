import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypow',
  // pure - run only once at the time of loading the page
  pure: true
  // impure - run everytime there is a change in value. keeps running internally. affects performance
})
export class MyPowerPipe implements PipeTransform {

  transform(value: number, ...args: any[]): number {
    // args[0] is the 2nd argument provided like pow to what number. 
    let result = value ;
    for (let i=1;i<args[0];i++)
      result = result * value;

    return result;
  }

}

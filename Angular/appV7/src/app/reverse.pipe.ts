import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string): string {

    if( typeof value !== "string" ){
      throw new Error("ReversePipe: Not a string")
    }

    let newStr = "";
    for (let i = value.length; i >= 0; i--) {
      newStr += value.charAt(i);
    }
    return newStr;
  }

}

import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'power'
})
export class PowerPipe implements PipeTransform {

  transform(value: number, ...args: any[]): string {
    console.log(value);
    if (args.length > 0) {
      const power = args[0]; // Primul item din lista reprezinta puterea;
      console.log(power);

      // daca power NU este un numar returnam un mesaj de eraore
      if (isNaN(power)) {
        return `Nu se poate calcula ${value} ^ ${this.abs(power)}`;
      }

      // daca power este numar returnam rezultatul operatiei
      return `${value} ^ ${this.abs(power)} = ${this.pow(value, power)}`;
    }

    // return patratul input-ului
    // Pentru conversia number string am folosit template literal din JavaScript
    return `${value} ^ 2 = ${value * value}`;
  }

  pow(n: number, p: number): number {
    let res = 1;
    for (let i = 0; i < this.abs(p); i++) {
      res = res * n;
    }
    return res;
  }

  abs(n: number): number {
    return n < 0 ? -1 * n : n;
  }
}

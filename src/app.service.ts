import { Injectable } from '@nestjs/common';
import { resourceUsage } from 'process';


@Injectable()
export class AppService {


  getNumber(): number{
    const a=30;
    const b=40;
    const c=a+b;
    return c;
    
    }
    
    getString(): string{
    const name='Maxim';
    const lastname='Zhyvora';
    const fullname=name+' '+lastname;
    return fullname;
    }
    
    getArrays():number[]{
    const list: number[]=[1,2,3];
    return list;
    }
    
    getEnums():number{
      const enum color{Black,White,Green};
      let c:color=color.Black;
      return c;
    }
    
    getMultitypeArrays():(string|number)[][]{
      const multlist:(string|number)[][]=[['Maxim',10],['day',16]];
      return multlist;
    }
    
    getMultitypeValues(): number|string{
      const d=17;
      return d;
    }
}


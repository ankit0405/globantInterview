import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(value);
    let date = value.slice(-2);
    let month = value.substring(5,7);
    let year = value.substring(0,4);
    // console.log(month);

    let suffix = 'th';
    if(date == '01' || date == '21' || date == '31'){
      suffix = 'st';
    }
    else if(date == '02'|| date == '22'){
      suffix = 'nd';
    }
    else if(date == '03' || date == '23'){
      suffix = 'rd'
    }
    month = this.getMonth(month);
    // console.log(month);
    // const fullDate: string = date + suffix + ' ' + monthYear;
    const fullDate:string = date + suffix + ' ' + month + ', ' + year;
    return fullDate;
  }

  getMonth(val){
    let arr = ['January','February','March','April','May','June','July'
        ,'August','September','October','November','December'];

    let a:number = (val);
    return arr[a - 1];
  }

}

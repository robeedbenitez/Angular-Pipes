import { Pipe, PipeTransform} from '@angular/core'
@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform {
    
    transform(value:string, flag:boolean = true):string{
        // if(flag){
        //    return value.toUpperCase();
        //}else{
        //    return value.toLowerCase();
        //}
        return (flag) ? value.toUpperCase() : value.toLowerCase();
    }
    
}
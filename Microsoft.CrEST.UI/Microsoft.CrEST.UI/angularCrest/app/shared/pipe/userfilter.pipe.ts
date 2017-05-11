/// <reference path="../autocomplete/autocomplete.component.ts" />
import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'filterUser'
})

export class UserFilterPipe implements PipeTransform {
    transform(value: string[], args: string): string[] {
        if (args !== '') {
            return value.filter(value =>
                (value.toLowerCase().indexOf(args.toLowerCase()) !== -1));
        }
    }

}
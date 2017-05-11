/// <reference path="../../sla/shared/models/application.ts" />
import { Pipe, PipeTransform } from '@angular/core';
import { Application } from '../../sla/shared/models/application';
@Pipe({ name: 'search' })
export class SearchPipe implements PipeTransform {
    transform(value: Application[] , args: string, arg1: string, arg2: string): any {
        var contactId = args;
        var serviceLine = arg1
        var application = arg2;
        if ((contactId.trim() !== '' || null || undefined) && (serviceLine.trim() !== '' || null || undefined) && (application.trim() !== '' || null || undefined)) {
            return value.filter(value =>
                (value.contactId == contactId) && (value.serviceLine.toLowerCase().indexOf(serviceLine.toLowerCase()) !== -1) && (value.application.toLowerCase().indexOf(application.toLowerCase()) !== -1));
        }

        else if ((contactId.trim() != "" || null || undefined) && (serviceLine.trim() != "" || null || undefined) && (application.trim() == '' || null || undefined)) {
            return value.filter(value =>
                (value.contactId == contactId) && (value.serviceLine.toLowerCase().indexOf(serviceLine.toLowerCase()) !== -1));
        }
        else if ((contactId.trim() != "" || null || undefined) && (serviceLine.trim() == "" || null || undefined) && (application.trim() != "" || null || undefined)) {
            return value.filter(value =>
                (value.contactId == contactId) && (value.application.toLowerCase().indexOf(application.toLowerCase()) !== -1));
        }
        else if ((contactId.trim() == "" || null || undefined) && (serviceLine.trim() != "" || null || undefined) && (application.trim() != '' || null || undefined)) {
            return value.filter(value =>
                (value.application.toLowerCase().indexOf(application.toLowerCase()) !== -1) && (value.serviceLine.toLowerCase().indexOf(serviceLine.toLowerCase()) !== -1));
        }

        else if (serviceLine.trim() != "" || null || undefined) {
            return value.filter(value =>
                (value.serviceLine.toLowerCase().indexOf(serviceLine.toLowerCase()) !== -1));
        }
        else if (contactId.trim()!= "" || null ||undefined) {
            return value.filter(value =>
                (value.contactId == contactId));
        }
        else if (application.trim() != "" || null || undefined) {
            return value.filter(value =>
                (value.application.toLowerCase().indexOf(application.toLowerCase()) !== -1));
        }

        return value;
    }
}

import { ElementRef, Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

//import {Config} from '../../config/config';

@Component({
    selector: 'auto-complete',
    template: require('./autocomplete.component.html'),
    styles: [String(require('./autocomplete.component.css'))],
    
    

    //styleUrls: ['autocomplete.component.css'].toString();
})
export class AutoCompleteComponent implements OnInit {
   
    @Input() elementToBind: HTMLElement;
    @Input() values: string[];
    @Input() tagId: string;
    @Output() notifyOnSelected: EventEmitter<string> = new EventEmitter<string>();
    foucusedItem: number = 0;
    isFocusedOnItem: boolean = false;
    scrollIndex: number = 0;
    popupShow: boolean = false;
    scrollMax: number = 125;
    color: string = 'red';
    value: string = '';
    //constructor(private _config: Config) {
    //}

    ngOnInit() {
        var _this = this;
        this.elementToBind.addEventListener("blur", function (e) {
            if (!_this.isFocusedOnItem) {
                var currentValue = (<HTMLInputElement>this).value;
                if (currentValue != null && currentValue.trim() != "" && _this.values.indexOf(currentValue) == -1) {
                    currentValue = "";
                   
                }
                else if(currentValue.trim() != "" && _this.values.indexOf(currentValue) == -1) {
                    currentValue = "";
                }
                else if (currentValue.trim() == "") {
                    currentValue = "";
                
                }

                _this.resetPopupSettings(false);

            }
        });
        this.elementToBind.addEventListener("focus", function (e) {
            var value = (<HTMLInputElement>this).value;
         
            _this.isFocusedOnItem = false;

            _this.resetPopupSettings(true);
        });
    }

 

    //changeStyle(event: any) {
    //    this.color = event.type == 'mouseover' ? 'yellow' : 'red';
    //}
    selectedItem(item: string) {

        this.notifyOnSelected.emit(item);
        this.resetPopupSettings(false);
    }

    resetPopupSettings(showPopUp: boolean) {
        this.popupShow = showPopUp;
        this.foucusedItem = 0;
        this.scrollIndex = 0;
        this.scrollMax = 125;
    }



}




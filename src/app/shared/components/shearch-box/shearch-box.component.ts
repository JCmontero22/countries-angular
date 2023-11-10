import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-shearch-box',
  templateUrl: './shearch-box.component.html',
  styleUrls: ['./shearch-box.component.css']
})
export class ShearchBoxComponent {

    @Input()
    public placeHolder: string = '';

    @Output()
    public onValue = new EventEmitter<string>();

    emitValue(value: string):void{
        this.onValue.emit(value);
    }
}

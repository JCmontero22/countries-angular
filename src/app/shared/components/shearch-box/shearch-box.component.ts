import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'app-shearch-box',
  templateUrl: './shearch-box.component.html',
  styleUrls: ['./shearch-box.component.css']
})
export class ShearchBoxComponent implements OnInit, OnDestroy {



    private debouncer: Subject<string> = new Subject<string>();
    private deboncerSubscription?: Subscription;

    @Input()
    public placeHolder: string = '';

    @Input()
    public initialValue: string = '';

    @Output()
    public onValue = new EventEmitter<string>();

    @Output()
    public onDebounce = new EventEmitter<string>();

    ngOnInit(): void {
        this.deboncerSubscription = this.debouncer.pipe(debounceTime(1000)).subscribe( value => {
            this.onDebounce.emit(value);
        })
    }

    emitValue(value: string):void{
        this.onValue.emit(value);
    }

    onkyPress(searchTerm: string){
        this.debouncer.next(searchTerm);
    }

    ngOnDestroy(): void {
        this.deboncerSubscription?.unsubscribe();
    }
}

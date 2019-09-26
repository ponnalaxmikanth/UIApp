import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-digital-curr-back-card',
  templateUrl: './back-card.component.html',
  styleUrls: ['./back-card.component.scss']
})
export class BackCardComponent implements OnInit, OnChanges {

  @Input() CurrentValue: any;

  public _currentValue: any;

  constructor() { }

  ngOnInit() {
    
  }

  ngOnChanges(changes: SimpleChanges) {
    try {
      this._currentValue = changes.CurrentValue.currentValue;
      //console.log('BackCardComponent -- ngOnChanges', this._currentValue);
    }
    catch (ex) { console.error('FrontCardComponent -- ngOnChanges', ex); }
  }

}

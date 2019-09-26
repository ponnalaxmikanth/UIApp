import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-digital-curr-front-card',
  templateUrl: './front-card.component.html',
  styleUrls: ['./front-card.component.scss']
})
export class FrontCardComponent implements OnInit, OnChanges {

  @Input() CurrentValue: any;

  public _currentValue: any;

  constructor() { }

  ngOnInit() {
    
  }

  ngOnChanges(changes: SimpleChanges) {
    try {
      this._currentValue = changes.CurrentValue.currentValue;
      //console.log('FrontCardComponent -- ngOnChanges', this._currentValue);
    }
    catch (ex) { console.error('FrontCardComponent -- ngOnChanges', ex); }
  }
}

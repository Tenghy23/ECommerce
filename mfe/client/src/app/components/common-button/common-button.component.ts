import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'common-button',
  templateUrl: './common-button.component.html',
  styleUrls: ['./common-button.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CommonButtonComponent implements OnInit {
  @Input() inputType: string;
  @Input() buttonName: string;

  @Output() buttonClicked: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  
  onClick() {
    this.buttonClicked.emit(' i am clicked');
  }
}

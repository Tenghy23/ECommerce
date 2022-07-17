import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Self, ViewChild } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NgControl, Validators } from '@angular/forms';

@Component({
  selector: 'common-input',
  templateUrl: './common-input.component.html',
  styleUrls: ['./common-input.component.scss'],
})
export class CommonInputComponent implements OnInit, ControlValueAccessor {
  @ViewChild('input') input: ElementRef;
  @Input() inputType: string = '';
  @Input() inputId: string = '';
  @Input() inputPlaceHolder: string = '';
  @Input() formValue: string = '';
  
  @Output() blur: EventEmitter<void> = new EventEmitter<void>();

  onChange: (value: any) => void = () => {};
  onTouched: () => void = () => {};
  disabled: boolean;

  constructor(@Self() public controlDir: NgControl) {
    controlDir.valueAccessor = this;
  }

  ngOnInit(): void {
  }

  writeValue(value: any): void {
    value && this.controlDir.control?.setValue(value, { emitEvent: false });
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

}

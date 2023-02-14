import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-basic',
  templateUrl: './input-basic.component.html',
  styleUrls: ['./input-basic.component.scss']
})
export class InputBasicComponent{

  @Input()
  inputType:string = "text"

  @Input()
  inputPlaceHolder:string = "Default placeholder"

  @Input()
  inputClass:string = "input"

  constructor() { }

}

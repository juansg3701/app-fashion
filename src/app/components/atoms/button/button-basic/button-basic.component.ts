import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-basic',
  templateUrl: './button-basic.component.html',
  styleUrls: ['./button-basic.component.scss']
})
export class ButtonBasicComponent {


  @Input()
  labelButton:string = 'text of button'
  constructor() { }

}

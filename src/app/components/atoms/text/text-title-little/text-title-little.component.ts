import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-title-little',
  templateUrl: './text-title-little.component.html',
  styleUrls: ['./text-title-little.component.scss']
})
export class TextTitleLittleComponent {

  @Input()
  text:string = "Write here the text of the title"
}

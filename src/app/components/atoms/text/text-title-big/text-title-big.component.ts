import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-title-big',
  templateUrl: './text-title-big.component.html',
  styleUrls: ['./text-title-big.component.scss']
})
export class TextTitleBigComponent {
  @Input()
  text:string = "Write here the text of the title"
}

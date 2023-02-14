import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-title-medium',
  templateUrl: './text-title-medium.component.html',
  styleUrls: ['./text-title-medium.component.scss']
})
export class TextTitleMediumComponent {

  @Input()
  text:string = "Write here the text of the title"
}

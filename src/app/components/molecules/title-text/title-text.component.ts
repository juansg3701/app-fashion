import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-text',
  templateUrl: './title-text.component.html',
  styleUrls: ['./title-text.component.scss']
})
export class TitleTextComponent {

  @Input()
  textTitle:string = "Write the text of the title"

  @Input()
  textParagraph:string = 'Write the text of the paragraph'
}

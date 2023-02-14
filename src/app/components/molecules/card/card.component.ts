import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-interest',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input()
  textTitle:string = "Write the text of the title in the card"

  @Input()
  textParagraph:string = 'Write the text of the paragraph in card'
  
  constructor() { }


}

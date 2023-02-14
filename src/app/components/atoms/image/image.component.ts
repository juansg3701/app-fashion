import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent {

  @Input()
  urlImage: string = "write the url of the image"

  @Input()
  altImage: string = "write the alt of the image"

  @Input()
  widthImage: string = "write the with of the image"

  @Input()
  heightImage: string = "write the height of the image"

}

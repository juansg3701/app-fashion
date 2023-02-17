import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent {

  @Input()
  urlImage: string = "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  @Input()
  altImage: string = "write the alt of the image"

  @Input()
  widthImage: string = '100%'

  @Input()
  heightImage: string = '100%'

}

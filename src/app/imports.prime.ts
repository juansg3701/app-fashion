import { NgModule } from '@angular/core';

import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {ImageModule} from 'primeng/image';
import {SlideMenuModule} from 'primeng/slidemenu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
    exports: [
        CardModule,
        ButtonModule,
        ImageModule,
        SlideMenuModule,
        BrowserAnimationsModule
    ],
    imports: [
    ],
})
export class ExportPrime { }
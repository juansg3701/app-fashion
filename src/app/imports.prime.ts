import { NgModule } from '@angular/core';

import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {ImageModule} from 'primeng/image';
import {MenuModule} from 'primeng/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    exports: [
        CardModule,
        ButtonModule,
        ImageModule,
        MenuModule,
        BrowserAnimationsModule,
        FileUploadModule,
        HttpClientModule,
        
    ],
    imports: [
    ],
})
export class ExportPrime { }
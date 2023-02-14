import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputBasicComponent } from './components/atoms/input/input-basic/input-basic.component';
import { MainComponent } from './pages/main/main.component';
import { ButtonBasicComponent } from './components/atoms/button/button-basic/button-basic.component';
import { CardComponent } from './components/molecules/card/card.component';
import { ExportPrime } from './imports.prime';

import { ParagraphComponent } from './components/atoms/paragraph/paragraph.component';
import { InterestComponent } from './components/organisms/interest/interest.component';
import { CardPersonComponent } from './components/organisms/card-person/card-person.component';
import { ImageComponent } from './components/atoms/image/image.component';
import { TitleTextComponent } from './components/molecules/title-text/title-text.component';
import { TextTitleBigComponent } from './components/atoms/text/text-title-big/text-title-big.component';
import { TextTitleLittleComponent } from './components/atoms/text/text-title-little/text-title-little.component';
import { TextTitleMediumComponent } from './components/atoms/text/text-title-medium/text-title-medium.component';
import { HeaderMenuComponent } from './components/organisms/header-menu/header-menu.component';

@NgModule({
  declarations: [
    AppComponent,

    InputBasicComponent,
    MainComponent,
    ButtonBasicComponent,
    CardComponent,
    ParagraphComponent,
    InterestComponent,
    CardPersonComponent,
    CardComponent,
    ImageComponent,
    TitleTextComponent,
    TextTitleBigComponent,
    TextTitleLittleComponent,
    TextTitleMediumComponent,
    HeaderMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    ExportPrime
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

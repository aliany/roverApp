import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoverComponent } from './rover/rover.component';
import { InstructionsInputComponent } from './rover/instructions-input/instructions-input.component';
import { BoardComponent } from './rover/board/board.component';
import { RoverModule } from './rover/rover.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RoverModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

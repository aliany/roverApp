import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RoverComponent } from './rover.component';
import { BoardComponent } from './board/board.component';
import { InstructionsInputComponent } from './instructions-input/instructions-input.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { InstructionsButtonComponent } from './instructions-button/instructions-button.component';



@NgModule({
  declarations: [
    RoverComponent,
    InstructionsInputComponent,
    BoardComponent,
    InstructionsButtonComponent,
  ],
  exports: [
    RoverComponent,
    InstructionsInputComponent,
    BoardComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule

  ]
})
export class RoverModule { }

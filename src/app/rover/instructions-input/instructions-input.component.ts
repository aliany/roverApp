import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-instructions-input',
  templateUrl: './instructions-input.component.html',
  styleUrls: ['./instructions-input.component.css']
})
export class InstructionsInputComponent implements OnInit {

  @Output() onSedInstruction: EventEmitter<string> = new EventEmitter();
  instruction: string = ''; 

  constructor() { }

  ngOnInit(): void {
  }

  executeInstruction():void{
    if (this.instruction.length > 0) {
      this.onSedInstruction.emit(this.instruction.toUpperCase());
      this.instruction = '';
    } else {
      alert("The instruction is blank.");
    }
  }
}

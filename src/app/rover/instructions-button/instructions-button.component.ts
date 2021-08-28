import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-instructions-button',
  templateUrl: './instructions-button.component.html',
  styleUrls: ['./instructions-button.component.css']
})
export class InstructionsButtonComponent implements OnInit {
  
  @Output() onSedInstruction: EventEmitter<string> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  sedInstruction( instruction: string):void {
      this.onSedInstruction.emit(instruction.toUpperCase());
  }

}

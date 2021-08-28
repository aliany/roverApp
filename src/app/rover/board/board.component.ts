import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Rover } from '../interfaces/rover.interface';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  @Input() movements: Rover[] = [];
  @Input() rover!: Rover;
  @Input() isObstacle!: boolean;
  @Output() onObstacles: EventEmitter<string[]> = new EventEmitter();

  grid: string = '';
  direction: string = '';
  listObstacle: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.grid = `${this.rover.x}${this.rover.y}`;
    this.direction = this.rover.direction;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.movements.length > 0) {
      let promise = Promise.resolve();
      this.movements.forEach(rover => {
        promise = promise.then(() => {
            this.grid = rover.x + rover.y
            this.direction = rover.direction
          return new Promise(function (resolve) {
            setTimeout(resolve, 500);
          });
        });
      });
      promise.then(() => {
        if (this.isObstacle === true) {
          alert("The robot cannot walk, an obstacle has been encountered, turn the robot to a new direction to keep walking.");
        }
      });

    }
  }

  obstacle(valor: string){
     this.listObstacle.push(valor);
     this.onObstacles.emit(this.listObstacle);
  }
}

import { Component, OnInit, ɵisListLikeIterable } from '@angular/core';
import { Rover } from './interfaces/rover.interface';
import { RoverService } from './services/rover.service';

@Component({
  selector: 'app-rover',
  templateUrl: './rover.component.html',
  styleUrls: ['./rover.component.css']
})


//Rover: Position and Location => (x, y, Z), where in (N, E, W, S)
//Grid of positions => (x, y, Z), where (A, 0, N) => (x=A, y=0, Z=N) chessboard
//maximunCoordinates => (maxX, maxY) => (J, 9)
//instructions => (L, R, F, B ) => (L => turnLeft, R => turnRight, F => foward, B => backward )
//board size: (A,0)
//Array of RoverInstruction objects, where RoverInstruction objects contains: RoverPosition ang RoverCommand
//      


export class RoverComponent implements OnInit {

  rover: Rover = {
    direction: "N",
    x: "E",
    y: 4,
  }
  direction: string = "N";
  moveList: Rover[] = [];
  listGridObstacles: string[] = [];
  isObstacle: boolean = false;

  constructor(private roverService: RoverService) { }

  ngOnInit(): void {
  }

  instructionReceived(instructionSent: string) {
    this.moveList = [];
    let instructions: string[] = [];
    instructions = instructionSent.trim().split("").filter(inst =>
      inst === 'F' || inst === 'B' || inst === 'L' || inst === 'R');
    if (instructions.length > 0) {
      instructions.forEach(inst => {
        const newRover = this.roverService.walkRover(inst, this.rover, this.listGridObstacles);
        this.isObstacle = this.roverService.obtacles(newRover, this.listGridObstacles);
        if (this.isObstacle === false) {
          this.rover = newRover;
          this.moveList.push(this.rover);
        }
        // else {
        //   alert("The robot cannot walk, an obstacle has been encountered, turn the robot to a new direction to keep walking.");
        // }     
      })
    } else {
      alert("The instruction is not valid.");
    }
  }

  obstacles(listdObstaclesSed: string[]) {
    this.listGridObstacles = listdObstaclesSed;
  }
}


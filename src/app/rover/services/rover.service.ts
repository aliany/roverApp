import { Injectable } from '@angular/core';

//Interfaces
import { Rover } from '../interfaces/rover.interface';

@Injectable({
  providedIn: 'root'
})
export class RoverService {

  private alphabet: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  constructor() { }

  turnLeft(rover: Rover): Rover {
    switch (rover.direction) {
      case "N":
        return { ...rover, direction: rover.direction = "W" };
      case "W":
        return { ...rover, direction: rover.direction = "S" };
      case "S":
        return { ...rover, direction: rover.direction = "E" };
      case "E":
        return { ...rover, direction: rover.direction = "N" };
      default:
        return rover;
    }
  }

  turnRight(rover: Rover): Rover {
    switch (rover.direction) {
      case "N":
        return { ...rover, direction: rover.direction = "E" };
      case "W":
        return { ...rover, direction: rover.direction = "N" };
      case "S":
        return { ...rover, direction: rover.direction = "W" };
      case "E":
        return { ...rover, direction: rover.direction = "S" };
      default:
        return rover;
    }
  }

  nextPositionForward(rover: Rover): string {
    const currentIndex = this.alphabet.indexOf(rover.x);
    if (currentIndex !== -1) {
      if (rover.direction === "W") {
        return this.alphabet[(currentIndex - 1)];
      } else if (rover.direction === "E") {
        return this.alphabet[(currentIndex + 1)];
      }
    }
    return "invalid";
  }

  nextPositionBackwards(rover: Rover): string {
    const currentIndex = this.alphabet.indexOf(rover.x);
    if (currentIndex !== -1) {
      if (rover.direction === "W") {
        return this.alphabet[(currentIndex + 1)];
      } else if (rover.direction === "E") {
        return this.alphabet[(currentIndex - 1)];
      }
    }
    return "invalid";
  }

  walkForward(rover: Rover): Rover {
    try {
      switch (rover.direction) {
        case "N":
          if (1 > rover.y) {
            throw new Error("The robot cannot walk anymore, it has reached the edge of the board. Turn the robot to a new orientation to keep walking.");
          }
          return { ...rover, y: rover.y - 1 };
        case "W":
          if ("A" === rover.x) {
            throw new Error("The robot cannot walk anymore, it has reached the edge of the board. Turn the robot to a new orientation to keep walking.");
          }
          return { ...rover, x: this.nextPositionForward(rover) };
        case "S":
          if (8 < rover.y) {
            throw new Error("The robot cannot walk anymore, it has reached the edge of the board. Turn the robot to a new orientation to keep walking.");
          }
          return { ...rover, y: rover.y + 1 };
        case "E":
          if ("J" === rover.x) {
            throw new Error("The robot cannot walk anymore, it has reached the edge of the board. Turn the robot to a new orientation to keep walking.");
          }
          return { ...rover, x: this.nextPositionForward(rover) };
        default:
          return rover;
      }

    } catch (error) {
      alert(error);
      return rover;
    }
  }

  walkBackwards(rover: Rover): Rover {
    try {
      switch (rover.direction) {
        case "N":
          if (8 < rover.y) {
            throw new Error("The robot cannot walk anymore, it has reached the edge of the board. Turn the robot to a new orientation to keep walking.");
          }
          return { ...rover, y: rover.y + 1 };
        case "W":
          if ("J" === rover.x) {
            throw new Error("The robot cannot walk anymore, it has reached the edge of the board. Turn the robot to a new orientation to keep walking.");
          }
          return { ...rover, x: this.nextPositionBackwards(rover) };
        case "S":
          if (1 > rover.y) {
            throw new Error("The robot cannot walk anymore, it has reached the edge of the board.Turn the robot to a new orientation to keep walking.");
          }
          return { ...rover, y: rover.y - 1 };
        case "E":
          if ("A" === rover.x) {
            throw new Error("The robot cannot walk anymore, it has reached the edge of the board. Turn the robot to a new orientation to keep walking.");
          }
          return { ...rover, x: this.nextPositionBackwards(rover) };
        default:
          return rover;
      }
    } catch (error) {
      alert(error);
      return rover;
    }
  }

  obtacles(rover: Rover, listObstacles: string[]): boolean {
    const grid = rover.x + rover.y
    if (listObstacles.includes(grid)) {
      return true;
    } else {
      return false;
    }
  }

  walkRover(instruction: string, rover: Rover, listObstacles: string[]): Rover {
    try {
      switch (instruction) {
        case "F":
          return this.walkForward(rover);
        case "B":
          return this.walkBackwards(rover);
        case "L":
          return this.turnLeft(rover);
        case "R":
          return this.turnRight(rover);
        default:
          return rover
      }
    }
    catch (error) {
      alert(error);
      return rover;
    }
  }
}
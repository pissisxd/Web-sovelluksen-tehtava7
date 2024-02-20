import { Rectangle } from './Rectangle.js';
export class Square extends Rectangle {
    constructor(context, x, y, sideLength, color, thickness) {
        super(context, x, y, sideLength, sideLength, color, thickness)
    }
}
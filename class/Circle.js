import { Shape } from './Shape.js';

export class Circle {
    #radius
    constructor(context, x, y, color, radius, lineWidth = 1) {
        this.x = x
        this.y = y
        this.#radius = radius
        this.setLineWidth = lineWidth
        this.color = color
        this.context = context
    }
    draw() {
        this.context.beginPath()
        this.context.arc(this.x, this.y, this.#radius, 0, 2 * Math.PI)
        this.context.strokeStyle = this.color
        this.context.lineWidth = this.lineWidth
        this.context.stroke()
        this.context.closePath()
    }
}
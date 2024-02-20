import { Shape } from './Shape.js'
export class Rectangle {
    constructor(context, x, y, width, height, color, thickness) {
        this.context = context
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.color = color
        this.thickness = thickness
    }

    draw() {
        this.context.beginPath()
        this.context.rect(this.x, this.y, this.width, this.height)
        this.context.strokeStyle = this.color
        this.context.lineWidth = this.thickness
        this.context.stroke()
        this.context.closePath()
    }
}
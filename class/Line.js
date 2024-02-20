import { Shape } from './Shape.js'
export class Line {
    constructor(context, x1, y1, x2, y2, color, thickness) {
        this.context = context
        this.x1 = x1
        this.y1 = y1
        this.x2 = x2
        this.y2 = y2
        this.color = color
        this.thickness = thickness
    }
    draw() {
        this.context.beginPath()
        this.context.moveTo(this.x1, this.y1)
        this.context.lineTo(this.x2, this.y2)
        this.context.strokeStyle = this.color
        this.context.lineWidth = this.thickness
        this.context.stroke()
        this.context.closePath()
    }
}
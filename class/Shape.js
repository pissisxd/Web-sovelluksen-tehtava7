export class Shape {
    _x
    _y
    _lineWidth
    _color
    _context

    constructor(x, y, lineWidth = 1, color = 'black') {
        this._x = x
        this._y = y
        this._lineWidth = lineWidth
        this._color = color
        
    }

    set setLineWidth(lineWidth) {
        this._lineWidth = lineWidth;
        
    }
}
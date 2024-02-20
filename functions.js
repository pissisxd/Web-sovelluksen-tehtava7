import { Circle } from './class/Circle.js'
import { Line } from './class/Line.js'
import { Rectangle } from './class/Rectangle.js'
import { Square } from './class/Square.js'

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const x_input = document.querySelector('#x')
const y_input = document.querySelector('#y')
const draw_button = document.querySelector('button')
const radio_form = document.getElementById('radio-form')
const line_width_input = document.querySelector('input[type=number]')
const updateUI = (label3, label4) => {
  document.querySelector('div#third label').innerHTML = label3
  if (label4 !== undefined) {
    document.querySelector('div#fourth label').innerHTML = label4
    document.querySelector('div#fourth label').style.display = 'inline-block'
    document.querySelector('div#fourth input').style.display = 'inline-block'
  } else {
    document.querySelector('div#fourth label').style.display = 'none'
    document.querySelector('div#fourth input').style.display = 'none'
  }
}
radio_form.addEventListener('click', () => {
  const selShape = radio_form['shape'].value
  switch (selShape) {
    case 'line':
      updateUI('x2', 'y2')
      break
    case 'circle':
      updateUI('width:')
      break
    case 'rectangle':
      updateUI('width', 'height:')
      break
    case 'square':
      updateUI('width:')
      break
  }
})
draw_button.addEventListener('click', () => {
  const shape = radio_form['shape'].value
  switch (shape) {
    case 'line':
      drawLine()
      break
    case 'circle':
      drawCircle()
      break
    case 'rectangle':
      drawRectangle()
      break
    case 'square':
      drawSquare()
      break
  }
})
const drawLine = () => {
    console.log('Drawing line...')
  const x1 = x_input.value
  const y1 = y_input.value
  const x2 = document.querySelector('div#third input').value
  const y2 = document.querySelector('div#fourth input').value
  const lineWidth = line_width_input.value
  const color = document.querySelector('input[type=color]').value
  const line = new Line(ctx, x1, y1, x2, y2, color, lineWidth)
  line.draw()
  console.log('Line drawn successfully.')
}
const drawRectangle = () => {
    console.log('Drawing rectangle...')
  const x = x_input.value
  const y = y_input.value
  const width = document.querySelector('div#third input').value
  const height = document.querySelector('div#fourth input').value
  const lineWidth = line_width_input.value
  const color = document.querySelector('input[type=color]').value
  const rectangle = new Rectangle(ctx, x, y, width, height, color, lineWidth)
  rectangle.draw()
  console.log('Rectangle drawn successfully.')
}
const drawSquare = () => {
    console.log('Drawing square...')
  const x = x_input.value
  const y = y_input.value
  const size = document.querySelector('div#third input').value
  const lineWidth = parseInt(line_width_input.value, 10)
  const color = document.querySelector('input[type=color]').value
  const square = new Square(ctx, x, y, size, color, lineWidth)
  square.draw()
  console.log('Square drawn successfully.')
}
const drawCircle = () => {
    console.log('Drawing circle...')
  const x = x_input.value
  const y = y_input.value
  const width = document.querySelector('div#third input').value
  const lineWidth = line_width_input.value
  const color = document.querySelector('input[type=color]').value
  const circle = new Circle(ctx,x, y, color, width / 2, lineWidth)
  circle.draw()
  console.log('Circle drawn successfully.')
}
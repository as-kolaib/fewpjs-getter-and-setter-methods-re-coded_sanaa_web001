// Add your Circle class here

class Circle {
  constructor( radius ) {
    this.radius = radius;
  }
  get diameter() {
    return this.radius * 2
  }
  set diameter( diameter ) {
    this.radius = diameter / 2
  }
  get area() {
    return Math.PI * ( this.radius * this.radius )
  }
  get circumference() {
    return Math.PI * ( this.radius * 2 ) 
  }
  set circumference( circumference ) {
    this.radius = circumference / ( Math.PI * 2 )
  }

  set area( area ) {
    this.radius = Math.sqrt( area / Math.PI )
  }
}
let c = new Circle()
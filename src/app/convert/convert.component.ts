import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-convert',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './convert.component.html',
  styleUrl: './convert.component.css'
})
export class ConvertComponent {
//properties
num1: number = 0;
result: number = 0; 
x: number = 3.2808;
y: number = 1.8;
z:number = 32;

//methods
meter(): void {
  this.result = this.num1 * this.x;
}

feet (): void {
  this.result = this.num1 / this.x; 
}
fahrenheit (): void {
  this.result = (this.num1 * this.y) + this.z;
}
celsius (): void {
  this.result = (this.num1-this.z) / this.y;
}
}

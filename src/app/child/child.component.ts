import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  
  @ViewChild('cld') private cl!:ElementRef


  @Output() ev= new EventEmitter()
fun(){
  this.ev.emit('hello');
  this.cl.nativeElement.remove();
}
}

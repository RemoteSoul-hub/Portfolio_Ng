import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fade', [
      state('void', style({ opacity: 0})),

      transition('void => *', [
        animate(850)
      ])
    ])
  ]
})
export class AppComponent {
  title = 'portfolio';
  @HostBinding('class') className = '';
  toggleControl = new FormControl(false);


 ngOnInit(): void {
   //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
   //Add 'implements OnInit' to the class.
   this.toggleControl.valueChanges.subscribe(val => {
     this.className = val ? 'darkMode' : '';
   })
 }
}

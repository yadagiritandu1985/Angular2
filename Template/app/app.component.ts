import { Component } from '@angular/core';
import { TutorialsComponent } from './tutorials.component';

@Component({
  selector: 'my-app',
  template: `<h1>Hello World from India</h1>
             <h4>Color demo</h4>
             <my-tutorials></my-tutorials>`,
  styles: [ `h4{
     color: blue;
   }`] 
  directives: [TutorialsComponent]
})
export class AppComponent { }

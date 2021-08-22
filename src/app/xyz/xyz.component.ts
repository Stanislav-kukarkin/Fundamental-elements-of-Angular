import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xyz',
  templateUrl: './xyz.component.html',
  styleUrls: ['./xyz.component.scss']
})
export class XyzComponent {

  title = 'Initial'

  onInput(event: any){
this.title = event.target.value
  }

  //ngStyle

  backgroundToggle = false

  //ngClass

  backgroundToggle2 = false

  backgroundToggle3 = false

  //ngIf/else
  toggle4 = false
  toggle5 = false

  //ngSwitch
  toggle6: any = false

  //ngFor
  arr = [1, 1, 2, 3, 5, 8, 13]

  objs = [
    {title: 'Post1', author: 'Stanislav', comments: [
        {name: 'Max', text: 'lorem1'},
        {name: 'Max1', text: 'lorem2'},
        {name: 'Max2', text: 'lorem3'},
      ]},
    {title: 'Post2', author: 'Sris', comments: [
        {name: 'Max3', text: 'lorem4'},
        {name: 'Max4', text: 'lorem12'},
        {name: 'Max5', text: 'lorem23'},
      ]}
  ]

  now = new Date()
}

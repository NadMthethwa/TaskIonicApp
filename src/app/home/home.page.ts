import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  today: Date;

  todoList =[ {
    itemName : 'Coding',
    itemDueDate: '13-10-21',
    itemPriority: 'high',
    itemCategory : 'Work'
  },
  {
    itemName : 'Design',
    itemDueDate: '13-10-21',
    itemPriority: 'low',
    itemCategory : 'Work'
  },
  {
    itemName : 'Gym',
    itemDueDate: '13-10-21',
    itemPriority: 'low',
    itemCategory : 'Personal'
  },
]
  
  


  constructor() {
    this.today = new Date();
  }

}

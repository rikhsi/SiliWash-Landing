import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.less']
})
export class HelpComponent implements OnInit {

  cards = [
    {
      img: '../../../../assets/img/help/help__1.png',
      title: 'help.card_1.title',
      text: 'help.card_1.info'
    },
    {
      img: '../../../../assets/img/help/help__2.png',
      title: 'help.card_2.title',
      text: 'help.card_2.info'
    },
    {
      img: '../../../../assets/img/help/help__3.png',
      title: 'help.card_3.title',
      text: 'help.card_3.info'
    },
    {
      img: '../../../../assets/img/help/help__4.png',
      title: 'help.card_4.title',
      text: 'help.card_4.info'
    },
    {
      img: '../../../../assets/img/help/help__5.png',
      title: 'help.card_5.title',
      text: 'help.card_5.info'
    },
    {
      img: '../../../../assets/img/help/help__6.png',
      title: 'help.card_6.title',
      text: 'help.card_6.info'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex3',
  templateUrl: './ex3.component.html',
  styleUrls: ['./ex3.component.scss']
})
export class Ex3Component implements OnInit {

  url: string;

  constructor() { }

  ngOnInit() {
  }

  changePokemon(url: string) {
    this.url = url;
  }

}

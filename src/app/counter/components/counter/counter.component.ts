


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template:  ` <h1>Contador</h1>
                <p>
                Counter: {{ counter }}
                </p>
                <button (click)="increaseBy(1)">+1</button>
                <button (click)="increaseBy(-1)">-1</button>

                <button (click)="increaseBy(2)">+2</button>
                <button (click)="increaseBy(-2)">-2</button>

                <button (click)="reset()">Reset</button>
            `
})


export class CounterComponent{
  constructor(){}

  public counter:number = 10;

  increaseBy(value: number):void{
    this.counter += value;
  }

  reset():void{
    this.counter = 10;
  }
}

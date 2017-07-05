import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes: Hero[] = [
    {
      id: 0,
      name: 'Fearless',
    },
    {
      id: 1,
      name: 'Greatest',
    },
  ];
  hero: Hero = this.heroes[0];
}

import {Component} from 'angular2/core';

@Component({
    selector: "my-app",
    template: `
      <h1>{{title}}</h1>
      <h2>My Heroes</h2>
      <ul class="heroes">
        <li *ngFor="#hero of heroes" [class.selected] = "hero === selectedHero" (click)="onSelect(hero)">
          <span class="badge">{{hero.id}}</span> {{hero.name}}
        </li>
      </ul>
      <div *ngIf="selectedHero">
         <h2>{{selectedHero.name}} details!</h2>
         <div><label>id: </label>{{selectedHero.id}}</div>
         <div>
             <label>name: </label>
             <input [(ngModel)]="selectedHero.name" placeholder="name"/>
         </div>
      </div>
      `,
    styles: [`
     .selected {
       background-color: #CFD8DC !important;
       color: white;
     }
     .heroes {
       margin: 0 0 2em 0;
       list-style-type: none;
       padding: 0;
       width: 15em;
     }
     .heroes li {
       cursor: pointer;
       position: relative;
       left: 0;
       background-color: #EEE;
       margin: .5em;
       padding: .3em 0;
       height: 1.6em;
       border-radius: 4px;
     }
     .heroes li.selected:hover {
       background-color: #BBD8DC !important;
       color: white;
     }
     .heroes li:hover {
       color: #607D8B;
       background-color: #DDD;
       left: .1em;
     }
     .heroes .text {
       position: relative;
       top: -3px;
     }
     .heroes .badge {
       display: inline-block;
       font-size: small;
       color: white;
       padding: 0.8em 0.7em 0 0.7em;
       background-color: #607D8B;
       line-height: 1em;
       position: relative;
       left: -1px;
       top: -4px;
       height: 1.8em;
       margin-right: .8em;
       border-radius: 4px 0 0 4px;
     }
     `]
})

export class AppComponent {
    title = "b4-4 Fan Klub";
    selectedHero: Hero;
    public heroes = HEROES;
    onSelect(hero: Hero) { this.selectedHero = hero; }
}

export class Hero {
    id: number;
    name: string;
}

var HEROES: Hero[] = [
    { "id": 11, "name": "Mr Bombastic" },
    { "id": 12, "name": "Pink Guy" },
    { "id": 13, "name": "BLT-Supporter" },
    { "id": 14, "name": "Rainboy" },
    { "id": 15, "name": "Girl Gamer" },
    { "id": 16, "name": "Alpha Guy" },
    { "id": 17, "name": "Hitler's 'Evil' Twin" },
    { "id": 18, "name": "Dad Guy" },
    { "id": 19, "name": "Popsicle Stilts Man" },
    { "id": 20, "name": "JFK's Ghost" }
];

/*Oh look, the Crystal Gems! My things, they do destroy! How I hate those cloddy-cloddies! Their deaths would bring me joy! 
I got a little secret, that will really show them! It's a nasty piece of work from a special kind of gem! 
This ship is meant to fly, but it isn't to be entered. When they head inside this ship, they're in for a mind-bender, 
a place as unnerving as their unpleasant-est thought; The Magic Labyrinth of Per I Dot! 
Very scary and confusing, DESTINATION OF MY CHOOSING! The Magic Labyrinth of Per I Dot! 
Hahahaha!*/




System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AppComponent, Hero, HEROES;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = "b4-4 Fan Klub";
                    this.heroes = HEROES;
                }
                AppComponent.prototype.onSelect = function (hero) { this.selectedHero = hero; };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: "my-app",
                        template: "\n      <h1>{{title}}</h1>\n      <h2>My Heroes</h2>\n      <ul class=\"heroes\">\n        <li *ngFor=\"#hero of heroes\" [class.selected] = \"hero === selectedHero\" (click)=\"onSelect(hero)\">\n          <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n        </li>\n      </ul>\n      <div *ngIf=\"selectedHero\">\n         <h2>{{selectedHero.name}} details!</h2>\n         <div><label>id: </label>{{selectedHero.id}}</div>\n         <div>\n             <label>name: </label>\n             <input [(ngModel)]=\"selectedHero.name\" placeholder=\"name\"/>\n         </div>\n      </div>\n      ",
                        styles: ["\n     .selected {\n       background-color: #CFD8DC !important;\n       color: white;\n     }\n     .heroes {\n       margin: 0 0 2em 0;\n       list-style-type: none;\n       padding: 0;\n       width: 15em;\n     }\n     .heroes li {\n       cursor: pointer;\n       position: relative;\n       left: 0;\n       background-color: #EEE;\n       margin: .5em;\n       padding: .3em 0;\n       height: 1.6em;\n       border-radius: 4px;\n     }\n     .heroes li.selected:hover {\n       background-color: #BBD8DC !important;\n       color: white;\n     }\n     .heroes li:hover {\n       color: #607D8B;\n       background-color: #DDD;\n       left: .1em;\n     }\n     .heroes .text {\n       position: relative;\n       top: -3px;\n     }\n     .heroes .badge {\n       display: inline-block;\n       font-size: small;\n       color: white;\n       padding: 0.8em 0.7em 0 0.7em;\n       background-color: #607D8B;\n       line-height: 1em;\n       position: relative;\n       left: -1px;\n       top: -4px;\n       height: 1.8em;\n       margin-right: .8em;\n       border-radius: 4px 0 0 4px;\n     }\n     "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
            Hero = (function () {
                function Hero() {
                }
                return Hero;
            }());
            exports_1("Hero", Hero);
            HEROES = [
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
        }
    }
});
/*Oh look, the Crystal Gems! My things, they do destroy! How I hate those cloddy-cloddies! Their deaths would bring me joy!
I got a little secret, that will really show them! It's a nasty piece of work from a special kind of gem!
This ship is meant to fly, but it isn't to be entered. When they head inside this ship, they're in for a mind-bender,
a place as unnerving as their unpleasant-est thought; The Magic Labyrinth of Per I Dot!
Very scary and confusing, DESTINATION OF MY CHOOSING! The Magic Labyrinth of Per I Dot!
Hahahaha!*/
//# sourceMappingURL=app.component.js.map
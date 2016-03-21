import {Component} from 'angular2/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';
import {OnInit} from 'angular2/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.html',
    styleUrls : ['app/heroes.css'],
    directives: [HeroDetailComponent],
    providers: [HeroService]
})

export class AppComponent implements OnInit {
    public title = 'Tour of Heroes';
    heroes: Hero[];
    selectedHero: Hero;

    constructor(private _heroService: HeroService) {}

    getHeroes() {
      this.heroes = this._heroService.getHeroes();
    }

    ngOnInit() {
      this.getHeroes();
    }

    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }
}

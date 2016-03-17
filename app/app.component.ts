import {Component} from 'angular2/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.html',
    styleUrls : ['app/heroes.css'],
    directives: [HeroDetailComponent],
    providers: [HeroService]
})

export class AppComponent {
    public title = 'Tour of Heroes';
    heroes: Hero[];
    selectedHero: Hero;

    constructor(private _heroService: HeroService) {

    }

    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }
}


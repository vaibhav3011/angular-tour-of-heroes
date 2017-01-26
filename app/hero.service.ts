/**
 * Created by vaibhav-nd on 29/12/16.
 */
import { Injectable } from '@angular/core';
import {HEROES} from './mock-heroes'
@Injectable()
export class HeroService {
  getHeroes() : Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }
  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
      .then(heroes => heroes.find(hero => hero.id === id));
  }
}

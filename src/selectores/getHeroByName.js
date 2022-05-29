import { heroes } from "../data/Heroes";

export const getHeroByName = (heroName)=>{
    if (heroName.length === 0){
        return[];
    }else{
        heroName = heroName.toLowerCase();    
        return heroes.filter(hero=>hero.superhero.toLowerCase().includes(heroName));
    }
}
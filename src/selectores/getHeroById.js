import { Heroes } from "../data/Heroes";

export const getHeroById = (id) => {
    return Heroes = Heroes.filter ( hero => hero.id === id) ;
}
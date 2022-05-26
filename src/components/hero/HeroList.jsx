import React from 'react';
import HeroCard from './HeroCard';
import { getHeroeByPublisher } from '../../selectores/getHeroesByPublisher';

export const HeroList = ({publisher}) => {

  const heroes = getHeroeByPublisher(publisher);
    
  return (
    <div className='row rows-cols-1 row-cols-md-3 g-3'>                
        {
          heroes.map(hero => (
            <HeroCard  
              key={hero.id} 
              {...hero} />
          ))
        }        
    </div>
  )
}

import React, {useMemo} from 'react';
import HeroCard from './HeroCard';
import { getHeroeByPublisher } from '../../selectores/getHeroesByPublisher';

export const HeroList = ({publisher}) => {

  const heroes = useMemo(() => getHeroeByPublisher(publisher), [publisher]);

  return (
    <div className='row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__fadein'>                
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

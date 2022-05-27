import React from 'react';
import { HeroList } from '../hero/HeroList';


export const DCScreen = () => {  
  return (
    <div>
        <h1>Heroes DC</h1>
        <hr/>

        <HeroList publisher='DC Comics'/>
    </div>
  )
}

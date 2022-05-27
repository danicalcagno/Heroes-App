import React, {useMemo} from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { getHeroById } from '../../selectores/getHeroById';

export const HeroScreen = () => {
  
  const navigate = useNavigate();

  const { heroeId } = useParams();
  
  const hero = useMemo(()=>getHeroById(heroeId), [heroeId]);
  
  if (!hero){
    return <Navigate to='/' />
  }
  
  const imgPath = `/img/${heroeId}.jpg`;

  const {id,
        superhero,
        alter_ego,
        publisher,
        first_appearance,
        characters} = hero;

        const handleReturn = () => {       
          navigate(-1); //vuelve a la pagina anterior          
        }
  return (
    <div className='row mt-5'>
      <div className='col-4'>
          <img 
              src={imgPath} 
              alt={superhero}
              className='img-thumbnail animate__animated animate__fadeInLeft' //borde redondeado de bootstrap
              ></img>
      </div>
      <div className='col-8'>
        <h3>{superhero}</h3>
        <ul className='list-group'>
            <li className='list-group-item'><b>Alter ego: </b> {alter_ego}</li>
            <li className='list-group-item'><b>Publisher: </b> {publisher}</li>
            <li className='list-group-item'><b>First Appearance: </b> {first_appearance}</li>
        </ul>
        <br/>
        <h5>Characters</h5>
        <p>{characters}</p>

        <button className='btn btn-outline-primary'  onClick = { handleReturn }> Return </button>
      </div>
    </div>
  )
}

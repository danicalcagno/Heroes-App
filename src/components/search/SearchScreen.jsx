import React from 'react';
import {useForm} from '../../hooks/useForm';


export const SearchScreen = () => {
  
  const  [{ description } , handleinputchange] = useForm({
    description: ''
  });

  const handleSearchSubmit = (e) => {
      e.preventvalue();
      console.log(description);
      
      // if( description.trim().length<=1 ){
      //   return;
      // }
      // reset();
  }
  return (
    <>
        <h1>Formulario de Búsqueda</h1>
        <hr />

        <div className='row'>
            <div className='col-5'>
                <h4>Buscar</h4>
                <br/>

                <form onSubmit={ handleSearchSubmit }>
                    <input
                        onChange={ handleinputchange }
                        type='text'
                        placeholder='ingrese el Heroe a buscar...'
                        className='form-control'
                        name='description'
                        autoComplete='off'
                        value= { description } >
                    </input>
               
                    <button
                        type='submit'
                        className='btn btn-outline-primary mt-3'
                        >Buscar
                    </button>
                </form>
            </div>
        </div>
    </>
  )
}

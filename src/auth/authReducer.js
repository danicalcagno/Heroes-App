import { types } from "../types/types"
// aux reducer - esuna fn que recibe 2 parametros
//state ={} y action. La accion es la que va a modificar el Estado
//State deberia lucir de este modo..
// const state={
//     name: 'Daniela',
//     logged: 'true'
// }

export const authReducer = (state={}, action)=>{
    // eslint-disable-next-line default-case
    switch (action.type){
        case types.login:
            return{
                name: action.payload.name,
                logged: true
            }
        case types.logout:
                return{                    
                    logged: false
                }            
        default:
            return state;
    }
}

import {states} from './states'
export const allReducers = (state=states, action) =>{
     let newData ;
    switch (action.type){
       
        case 'ADD_DATA':
            newData=[...state];
            newData.push(action.payload)
            return newData;

        default:
            return state;
    }
        
}
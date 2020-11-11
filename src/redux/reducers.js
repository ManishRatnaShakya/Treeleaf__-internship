
import {states} from './states'
export const allReducers = (state=states, action) =>{
     let newData ;
    switch (action.type){
       
        case 'ADD_DATA':
            newData=[...state];
            newData.push(action.payload)
            return newData;

        case 'DELETE_DATA':
            newData=[...state];
            newData = newData.filter(data =>data.id !== action.payload)
            return newData;
            

        case 'UPDATE_DATA':
             newData = [...state];
             console.log('from update',newData);
             console.log('data',action.payload)
             
            let index=-1;
            for (let i=0; i<newData.length; i++){
                index+=1;
                if(newData[i].id===action.payload.id){
                    break;
                }
            }
            if(index!==-1){
                newData[index]= action.payload;
                return newData
            }

        default:
            return state;
    }
        
}
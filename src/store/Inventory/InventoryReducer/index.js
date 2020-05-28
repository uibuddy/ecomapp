import {VIEW_ALL, ADD_TYPE, EDIT_TYPE , DELETE_TYPE, ADD_INVENTORY } from "../actionTypes";
import inventoryInitialState from "../InventoryInitialState";

export default function inventoryReducer(state = inventoryInitialState, action){
    console.log('action', action);
    switch(action.type){        
        case VIEW_ALL:{
            return [...state];
        }
        case ADD_INVENTORY:{
            return [ 
                ...state,
                action.inventory
            ]
        }
        case DELETE_TYPE:{ 
            if(action.keys[0]=="Bulldozers"||action.keys[0]=="Chainsaws"){
            state.filter(function(item){
                   return item.InventoryName == action.keys[0];         
                 });
                state.splice(action.keys[1], 1);
            }else{
               state.splice(action.keys[1], 1);                
            }
            console.log('state:', state);
            return [...state];
             
        }
        default:
        return state;
    }
}

export {inventoryReducer}
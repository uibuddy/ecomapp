import {createStore} from 'redux';
import {inventoryIntialState} from '../InventoryInitialState';
import {inventoryReducer} from '../InventoryReducer';


export default function configureStore(){
//const store=createStore(inventoryReducer, inventoryIntialState);
const store = createStore(inventoryReducer, inventoryIntialState);
console.log('indeside config'+store);
return store;
}

export {configureStore};
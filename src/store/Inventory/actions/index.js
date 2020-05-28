import {VIEW_ALL, ADD_TYPE, EDIT_TYPE , DELETE_TYPE, ADD_INVENTORY } from "../actionTypes";

export function viewInventory(inventory){
    return{
        type:VIEW_ALL,
        inventory:inventory
    };
};
export function deleteInventory(obj){
    return{
        type:DELETE_TYPE,
        keys:obj
    };
};
export function insertInventory(inventory){
    return{
        type:ADD_INVENTORY,
        inventory:inventory
    };
};
export default{
    viewInventory:viewInventory,
    deleteInventory:deleteInventory
}

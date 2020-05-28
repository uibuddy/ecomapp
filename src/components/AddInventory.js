import React, {Fragment} from "react";
import {handleCollaspe} from '../utility/actions';
export default class AddInventory extends React.Component{
    constructor(props){
        super(props);
        this.state={
            inventoryName: '',
            inventoryTitle: ''
        }
    }
    addInventoryAction=(e)=>{
        let data={'InventoryName':this.state.inventoryName, 'InventoryTitle':this.state.inventoryTitle};
        this.props.insertInventory(data);
    }
    handleChange=(event, field)=>{
        this.setState({ [event.target.name]: event.target.value });
    }
    render(){
        return(
            <div className="col-lg-3" >
               <h2 className="type-heading-mobile" onClick={handleCollaspe}>Add Inventory</h2>
               <div className="border p-3 content-block">
               <div className="col-header-block">
                   Add New Item
                   <span className="close a-link link" onClick={(e)=>this.props.enableAddInventory(e)}>x</span>
                    </div>
               <div className="form-group">
                       <label htmlFor={'title'}>Name</label>
                       <input type="text"  name="inventoryName" className="form-control" onChange={(event)=>this.handleChange(event,'name')} id={'title'} />
               </div>
               <div className="form-group">
                   <label htmlFor={'type'}>Title</label>
                   <input type="text"  name="inventoryTitle" className="form-control" onChange={(event)=>this.handleChange(event,'title')} id={'type'} />
               </div>
               <div className="form-group">
                     <button className="btn btn-outline-success my-2 my-sm-0" onClick={(e)=>this.addInventoryAction(e)} type="submit">Submit</button>
               </div>
              
            </div>
            </div>
        );
    }
}
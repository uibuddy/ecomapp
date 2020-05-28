import React, {Fragment} from 'react';
import DatePicker from "react-datepicker"; 
import {handleCollaspe} from '../utility/actions';
import "react-datepicker/dist/react-datepicker.css";
import AddInventory from './AddInventory';

class InventoryItemCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            startDate: new Date()
          };
    }
    handleChange = (date) => {
        this.setState({
          startDate: date,
          addInventory:false
        });
      };
      
      removeInventory=(index)=>{
          this.props.deleteInventory(index);
      }
      enableAddInventory=()=>{
          this.setState({
            addInventory:!this.state.addInventory
          })
        
      }
      handleInputChange=(event)=>{
            event.target.value="dsd";
      }
      renderCalendar=(selectedDate, i)=>{
          let selectDate=this.state.startDate?this.state.startDate:selectedDate
          return <div className="form-group">          
          <label htmlFor={'date'+i}>date</label>
          <DatePicker selected={new Date(selectDate)} onChange={this.handleChange} id={'date'+i} className={"form-control custom-cal"}/>
      </div>
      }
      renderCard=(inventoryDetails)=>{
       return inventoryDetails&&inventoryDetails.map((item,i) => {
           let items=item.fields;
            return (
                <div className="col-lg-3" key={i}>                 
                    <h2 className="type-heading-mobile" onClick={handleCollaspe}>{item.InventoryName}</h2>

                    <div className="border p-3 content-block">
                    <div className="col-header-block">
                    {item.InventoryName +" - "+ item.InventoryTitle}
                            <span className="close a-link link" onClick={()=>this.removeInventory([this.props.browseBy, i])}>x</span>
                    </div>
                    <div className="form-group">
                            <label htmlFor={'title'+i}>Model</label>
                            <input type="text" name="model" onChange={(event)=>this.handleInputChange(event,'model')} value={item.InventoryTitle} className="form-control" id={'title'+i} />
                    </div>
                   {items&&<Fragment>
                    {items.type&&<div className="form-group">
                        <label htmlFor={'type'+i}>type</label>
                        <input type="text" value={items.type} className="form-control" id={'type'+i} />
                    </div>}
                    {items.grade&&<div className="form-group">
                        <label htmlFor={'grade'+i}>grade</label>
                        <input type="text" value={items.grade} className="form-control" id={'grade'+i} />
                    </div>}
                    {items.brand&&<div className="form-group">
                        <label htmlFor={'brand'+i}>brand</label>
                        <input type="text" value={items.brand} className="form-control" id={'brand'+i} />
                    </div>}
                    {items.bar&&<div className="form-group">
                        <label htmlFor={'bar'+i}>bar</label>
                        <input type="text" value={items.bar} className="form-control" id={'bar'+i} />
                    </div>}
                    {items.date&&
                        this.renderCalendar(items.date, i)
                    }
                    </Fragment>}                    
                    </div>
                </div>
                )
              });
        }
    render(){
        return (
                <div className="item-card row">              
                    {this.props.inventoryDetails&&this.props.inventoryDetails.length>0?this.renderCard(this.props.inventoryDetails):<h2>No item in inventory</h2>}              
                    {this.state.addInventory&&<AddInventory enableAddInventory={this.enableAddInventory} insertInventory={this.props.insertInventory}/>}
                    <div className="col-lg-3">
                        <form className="form-inline my-2 my-lg-0">                    
                            <button className="btn btn-outline-success my-2 my-sm-0" onClick={this.enableAddInventory} type="submit">Add Inventory</button>
                        </form>
                  </div>
                </div>
            
          );
    }
}
export default InventoryItemCard;


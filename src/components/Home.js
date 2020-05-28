import React, {Fragment} from 'react';
import {viewInventory,deleteInventory, insertInventory} from '../store/Inventory/actions/index';
import InventoryItemCard from './InventoryItemCard';
import { VIEW_ALL, DELETE_TYPE, ADD_INVENTORY} from '../store/Inventory/actionTypes/index';
import Header from './Header';
import { connect } from 'react-redux';
import '../style/home.css';
class App extends React.Component{
  constructor(props){
      super(props);
      this.state={
        filterData:this.props.inventoryDetails,
        browseBy:'viewall'
      }
  }
  componentDidMount(){
    this.filterInverntory('viewall');
  }
  componentWillReceiveProps(props){
    this.filterInverntory(this.state.browseBy);
  }
  filterInverntory=(catgory)=>{
    let filterData=[];
    if(catgory=="Chainsaws" || catgory=="Bulldozers"){
      filterData= this.props.inventoryDetails.filter(function(item){
        return item.InventoryName == catgory;         
      });
    }else {
      filterData=this.props.inventoryDetails;
    } 
    this.setState({
      filterData:filterData,
      browseBy:catgory
    })
  }
  render(){    
    return (
      <div className="container-fluid">
        <Header 
         inventoryDetails={this.props.inventoryDetails}
         viewInventory={this.props.viewInventory} 
         filterInverntory={this.filterInverntory}/>
        <InventoryItemCard 
            inventoryDetails={this.state.filterData} 
            deleteInventory={this.props.deleteInventory}
            insertInventory={this.props.insertInventory}
            browseBy={this.state.browseBy}
          />
      </div>
    );
  }
}

const mapStateToProps=(state)=>{
  return { inventoryDetails: state }; 
};
const mapDispatchToProps=(dispatch)=>({
  viewInventory:(state, VIEW_ALL)=>dispatch(viewInventory(state, VIEW_ALL)),
  deleteInventory:(state, DELETE_TYPE, data)=>dispatch(deleteInventory(state, DELETE_TYPE, data)),
  insertInventory:(state, ADD_INVENTORY, data)=>dispatch(insertInventory(state, ADD_INVENTORY, data)),
});
export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);

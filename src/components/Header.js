import React, {Fragment} from 'react';
import {handleCollaspe, unifyingArr} from '../utility/actions';
class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={
            collapse:false
        }
    }
    renderInventoryName=(inventoryDetails, nav)=>{
      let result = unifyingArr(inventoryDetails, "InventoryName");
        return result.map((item,i) => {
             return (
                <Fragment>
                    {nav==="main"?
                    <li className="nav-item" key={i}>
                        <a className="nav-link" href="#" onClick={()=>this.props.filterInverntory(item.InventoryName)}>{item.InventoryName}</a>
                    </li>:
                     <a className="dropdown-item" href="#" onClick={()=>this.props.filterInverntory(item.InventoryName)}>{item.InventoryName}</a>
                     }    
                </Fragment>
                );                     
            });
    }
   
    loadInvenstoryDetails=()=>{
       this.props.viewInventory();
    }
    handleNavToggle=()=>{
        this.setState({
            collapse:!this.state.collapse
        })
    }
    render(){
        return(
            <div className="item-card">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Objectors:</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon" onClick={(e)=>this.handleNavToggle(e)}></span>
              </button>
              
                <div className={this.state.collapse?"navbar-collapse":"collapse navbar-collapse"} id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                      <a className="nav-link" href="#" onClick={()=>this.props.filterInverntory("All")} >View All <span className="sr-only">(current)</span></a>
                    </li>
                    {this.props.inventoryDetails&&this.renderInventoryName(this.props.inventoryDetails, "main")}                   
                    
                    {this.props.inventoryDetails.length>0&&<li className="nav-item dropdown show">
                    <a className="nav-link dropdown-toggle" onClick={handleCollaspe} href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Manage Type
                      </a>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      {this.renderInventoryName(this.props.inventoryDetails, "sub")}
                      </div>
                    </li>}
                  </ul>
                  {/*<form className="form-inline my-2 my-lg-0 d-none">  
                  <div className="nav-item dropdown show">
                      <a className="nav-link dropdown-toggle" onClick={handleCollaspe} href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown--
                      </a>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                      </div>
                    </div>                  
                    
        </form-->*/}
                </div>
              </nav>
            </div>
        );
    }

}
export default Header;
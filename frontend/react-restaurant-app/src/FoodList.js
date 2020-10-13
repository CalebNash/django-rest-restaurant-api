import React from 'react';
import FoodItem from './FoodItem.js'
import Order from './Order.js'
import './App.css';


class FoodList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    foodList: [],
    order: [],
    }

    this.addOrder = this.addOrder.bind(this);
    this.removeOrder = this.removeOrder.bind(this);
    this.editOrder = this.editOrder.bind(this);
    this.visibleMenu = this.visibleMenu.bind(this);
    this.visibleHome = this.visibleHome.bind(this);
    this.submitOrder = this.submitOrder.bind(this);
  }
  componentDidMount(){

    fetch('/api/')
    .then(responce => responce.json())
    .then(data => this.setState({foodList: data}))

  }

  addOrder(food){
    const order = [...this.state.order, food];
    this.setState({order: order});
  }

  removeOrder(ordereditem){
    const order = [...this.state.order];
    const index = order.indexOf(ordereditem);
    order.splice(index, 1);
    this.setState({order});
  }

  editOrder(orderItem, instructions){
    orderItem.instructions = instructions
    console.log(this.state.ordereditems);
  }

  submitOrder(){
    this.setState({order: []})
    alert("Your order has been submited!");
  }

  visibleMenu(){
  document.getElementById('not-hide').style.display='none'
  document.getElementById('hide').style.display='block'

  }

  visibleHome(){
    document.getElementById('hide').style.display='none'
    document.getElementById('not-hide').style.display='block'

  }


  render(){
    //console.log(this.state.order);
    return(
      <React.Fragment>
      <div id='not-hide'>
        <nav className="navbar navbar-dark bg-dark">
          <p className="webName">Wild Thyme Gourmet</p>
          <div className='pages'>
            <button className="btn  menu-button"type="button" onClick={() => this.visibleHome()}>Home</button>
            <button className="btn  menu-button"type="button" onClick={() => this.visibleMenu()}>Menu</button>
          </div>
        </nav>
        <h1 className='home-info'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam autem iure porro nulla, vel quasi, delectus ipsam ea ex, tempore suscipit a eveniet voluptatum temporibus veniam accusamus hic repellendus, maiores!</h1>
      </div>
      <div id='hide'>
         <nav className="navbar navbar-dark bg-dark">
           <p className="webName">Wild Thyme Gourmet</p>
           <div className='pages'>
             <button className="btn  menu-button"type="button" onClick={() => this.visibleHome()}>Home</button>
             <button className="btn  menu-button"type="button" onClick={() => this.visibleMenu()}>Menu</button>
           </div>
         </nav>
      <div className='container'>
        <div className='row'>
          <FoodItem foodList={this.state.foodList} addOrder={this.addOrder}/>
          <Order order={this.state.order} removeOrder={this.removeOrder} editOrder={this.editOrder} foodList={this.state.foodList} submitOrder={this.submitOrder}/>
        </div>
      </div>
    </div>
      </React.Fragment>
    )
  }
}

export default FoodList;

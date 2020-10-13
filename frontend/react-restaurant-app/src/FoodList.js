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
  //   const foodList = [{
  //   name: 'Spaghetti',
  //   price:15.49,
  //   descripion: 'Spaghetti with house made Meat Sauce which is prepared fresh daily with garlic and herbs.',
  //   url: 'https://cmx.weightwatchers.co.uk/assets-proxy/weight-watchers/image/upload/t_WINE_EXTRALARGE/mkc4dqbjgfrnuarawox8.jpg',
  //   },
  //   {
  //   name: 'Mediterranean Baked Halibut',
  //   price: 20.00,
  //   descripion: 'Halibut and veggies, tossed in a bright Mediterranean sauce with lots of citrus, olive oil, fresh garlic and spices.',
  //   url: 'https://www.themediterraneandish.com/wp-content/uploads/2016/05/One-Pan-Baked-Halibut-Recipe-7.jpg',
  //   },
  //   {
  //   name: 'Ribeye',
  //   price: 30.99,
  //   descripion: '14oz CAB Ribeye grilled to order.',
  //   url: 'https://foremangrillrecipes.com/wp-content/uploads/2013/06/featured-ribeye-steak-foreman-grill.jpg',
  //   },
  //   {
  //   name:'New York Strip',
  //   price:25.00,
  //   descripion:'12oz New York Strip grilled to order.',
  //   url:'https://theviewfromgreatisland.com/wp-content/uploads/2020/01/new-york-strip-steak-sliced-scaled.jpg',
  //   },
  // ];
  // this.setState({foodList});

  fetch('/api/v1/todos/')
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

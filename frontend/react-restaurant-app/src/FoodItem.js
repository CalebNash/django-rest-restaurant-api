import React from 'react';

class FoodItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: '',
      price:'',
      description: '',
      url:'',
    }
  this.handleClick = this.handleClick.bind(this);
  }
  handleClick(food){
    this.props.addOrder(food);
  }
  render(){
    const foodList = this.props.foodList.map((item, index) =>
     <li className="list-group-item  list-group-item-dark list-style items" key={index}>
     <img className="foodImg"src={item.url} alt='#'/>
     <section className='item-desc'>
       <h4>{item.name}</h4>
       <p>{item.description}</p>
     </section>
     <button className="btn add-to-order"type="button" onClick={() => this.handleClick(item)}>Add to order ${item.price}</button></li>);
    return(
  <ul className="list-group col-12 col-lg-6">
    {foodList}
  </ul>
    )
  }
}
export default FoodItem;

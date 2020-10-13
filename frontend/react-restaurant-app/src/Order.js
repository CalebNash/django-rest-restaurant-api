import React from 'react'

class OrderItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      instructions:'',
      isEditing: false,
    }
    this.handleInput = this.handleInput.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
  }
  handleInput(event){
  this.setState({[event.target.name]: event.target.value});
  }

  toggleEdit() {
   this.setState({ isEditing: !this.state.isEditing})
 }

  render(){
    let instructions = this.state.instructions
    return(
    <li className="list-group-item  list-style order-item">
      <div className='order-desc'>
          <span className='order-name' >{this.props.item.name} ${this.props.item.price}</span>
          <button className="btn delete"type="button" onClick={() => this.props.removeOrder(this.props.item)}><i id="orderButton" className="fas fa-times"></i></button>
      </div>
      <div>
        {
          this.state.isEditing
          ?<textarea row='20' name="instructions" id="instructions" placeholder="Custom instructions" value={this.state.instructions} onChange={this.handleInput}/>
          : <p>{instructions}</p>

        }

        {
          this.state.isEditing
          ? <button onClick={() => {
            this.props.editOrder(this.props.item, this.state.instructions);
            this.toggleEdit();
            }} className="btn save"type="button">Save</button>
          : <button onClick={this.toggleEdit} className="btn save"type="button">Edit</button>
        }

      </div>
    </li>
    )
  }
}


class Order extends React.Component {

  render() {
    const subtotal = this.props.order.reduce((acc, item) => {
      let total = acc + item.price
      return Math.round(total * 100)/ 100;
    }, 0);
    const order = this.props.order.map((item, index) =><OrderItem key={index} item={item} removeOrder={this.props.removeOrder} editOrder={this.props.editOrder}/>)

    return(
      <div className="col-12 col-lg-6 order">
        <h1 className='order-title'>Order</h1>
        <ul className="list-group">
          {order}
        </ul>
        <div className='checkout'>
          <p className='subtotal'>Subtotal ${subtotal}</p>
          <button className="btn submit-order hover-change"type="button" onClick={() => this.props.submitOrder()}>Submit Order</button>
        </div>

      </div>
    )
  }
}

export default Order;

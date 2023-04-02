// Write your code here
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => {
  const calTotalCost = cartList => {
    let total = 0
    cartList.forEach(eachItem => {
      const x = eachItem.price * eachItem.quantity
      console.log(eachItem)
      console.log(eachItem.price)
      console.log(eachItem.quantity)
      console.log(x)
      total += x
      console.log(total)
    })
    return total
  }

  return (
    <CartContext.Consumer>
      {value => {
        const {cartList} = value
        const totalCost = calTotalCost(cartList)
        const totalOrders = cartList.length
        return (
          <div className="summary-bg">
            <div className="summary-card">
              <h1 className="summary-p">
                <span className="summary-total">Order Total: </span> Rs{' '}
                {totalCost} /-
              </h1>
              <p className="total-orders ">{totalOrders} Items in cart</p>
              <div>
                <button type="button" className="checkout-btn">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        )
      }}
    </CartContext.Consumer>
  )
}
export default CartSummary

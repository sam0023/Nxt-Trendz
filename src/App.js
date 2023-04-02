import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Products from './components/Products'
import ProductItemDetails from './components/ProductItemDetails'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import CartContext from './context/CartContext'

import './App.css'

class App extends Component {
  state = {
    cartList: [],
  }

  //   TODO: Add your code for remove all cart items, increment cart item quantity, decrement cart item quantity, remove cart item

  addCartItem = product => {
    const {cartList} = this.state
    let newProduct = true
    const updatedCartList = cartList.map(eachItem => {
      if (eachItem.id === product.id) {
        newProduct = false
        return {
          ...eachItem,
          quantity: eachItem.quantity + product.quantity,
        }
      }
      return eachItem
    })
    if (newProduct) {
      this.setState(prevState => ({cartList: [...prevState.cartList, product]}))
    } else {
      this.setState({cartList: updatedCartList})
    }
  }

  incrementCartItemQuantity = product => {
    const {cartList} = this.state
    const updatedCartList = cartList.map(eachItem => {
      if (eachItem.id === product.id) {
        return {
          ...eachItem,
          quantity: eachItem.quantity + 1,
        }
      }
      return eachItem
    })
    this.setState({cartList: updatedCartList})
  }

  decrementCartItemQuantity = product => {
    const {cartList} = this.state
    console.log(cartList)
    console.log('##########')
    let updatedCartList
    if (product.quantity === 1) {
      updatedCartList = cartList.filter(eachItem => eachItem.id !== product.id)
    } else {
      updatedCartList = cartList.map(eachItem => {
        if (eachItem.id === product.id) {
          return {
            ...eachItem,
            quantity: eachItem.quantity - 1,
          }
        }
        return eachItem
      })
    }
    this.setState({cartList: updatedCartList})
  }

  removeCartItem = id => {
    const {cartList} = this.state
    const updatedCartList = cartList.filter(eachItem => eachItem.id !== id)
    this.setState({cartList: updatedCartList})
  }

  removeAllCartItems = () => {
    this.setState({cartList: []})
  }

  render() {
    const {cartList} = this.state

    return (
      <CartContext.Provider
        value={{
          cartList,
          addCartItem: this.addCartItem,
          removeCartItem: this.removeCartItem,
          incrementCartItemQuantity: this.incrementCartItemQuantity,
          decrementCartItemQuantity: this.decrementCartItemQuantity,
          removeAllCartItems: this.removeAllCartItems,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/products" component={Products} />
          <ProtectedRoute
            exact
            path="/products/:id"
            component={ProductItemDetails}
          />
          <ProtectedRoute exact path="/cart" component={Cart} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </CartContext.Provider>
    )
  }
}

export default App
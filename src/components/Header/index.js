import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {AiFillHome} from 'react-icons/ai'
import {HiShoppingBag} from 'react-icons/hi'
import {FaShoppingCart} from 'react-icons/fa'
import CartContext from '../../context/CartContext'

import './index.css'

const Header = props => {
  const {activeSection} = props
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  const renderCartItemsCount = () => (
    <CartContext.Consumer>
      {value => {
        const {cartList} = value
        const cartItemsCount = cartList.length

        return (
          <>
            {cartItemsCount > 0 ? (
              <span className="cart-count-badge">{cartList.length}</span>
            ) : null}
          </>
        )
      }}
    </CartContext.Consumer>
  )

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-mobile-logo-container">
          <Link to="/">
            <img
              className="website-logo"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
            />
          </Link>

          <button
            type="button"
            className="nav-mobile-btn"
            onClick={onClickLogout}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
              alt="nav logout"
              className="nav-bar-img"
            />
          </button>
        </div>

        <div className="nav-bar-large-container">
          <Link to="/">
            <img
              className="website-logo"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
            />
          </Link>
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <Link
                to="/"
                className={`nav-link ${
                  activeSection === 'HOME'
                    ? 'active-section'
                    : 'non-active-section'
                }`}
              >
                Home
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link
                to="/products"
                className={`nav-link ${
                  activeSection === 'PRODUCTS'
                    ? 'active-section'
                    : 'non-active-section'
                }`}
              >
                Products
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link
                to="/cart"
                className={`nav-link ${
                  activeSection === 'CART'
                    ? 'active-section'
                    : 'non-active-section'
                }`}
              >
                Cart
                {renderCartItemsCount()}
              </Link>
            </li>
          </ul>
          <button
            type="button"
            className="logout-desktop-btn"
            onClick={onClickLogout}
          >
            Logout
          </button>
        </div>
      </div>
      <div className="nav-menu-mobile">
        <ul className="nav-menu-list-mobile">
          <li className="nav-menu-item-mobile">
            <Link to="/" className="nav-link">
              <AiFillHome
                className={`nav-bar-img ${
                  activeSection === 'HOME'
                    ? 'active-section'
                    : 'non-active-section'
                }`}
              />
              {/* <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
                alt="nav home"
                className={`nav-bar-img ${
                  activeSection === 'HOME'
                    ? 'sm-active-section'
                    : 'sm-none-active-section'
                }`} */}
            </Link>
          </li>

          <li className="nav-menu-item-mobile">
            <Link to="/products" className="nav-link">
              <HiShoppingBag
                className={`nav-bar-img ${
                  activeSection === 'PRODUCTS'
                    ? 'active-section'
                    : 'non-active-section'
                }`}
              />
              {/* <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
                alt="nav products"
                className={`nav-bar-img ${
                  activeSection === 'PRODUCTS'
                    ? 'sm-active-section'
                    : 'sm-none-active-section'
                }`}
              /> */}
            </Link>
          </li>
          <li className="nav-menu-item-mobile">
            <Link to="/cart" className="nav-link">
              <FaShoppingCart
                className={`nav-bar-img ${
                  activeSection === 'CART'
                    ? 'active-section'
                    : 'non-active-section'
                }`}
              />
              {/* <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
                alt="nav cart"
                className={`nav-bar-img ${
                  activeSection === 'CART'
                    ? 'sm-active-section'
                    : 'sm-none-active-section'
                }`}
              /> */}
              {renderCartItemsCount()}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(Header)

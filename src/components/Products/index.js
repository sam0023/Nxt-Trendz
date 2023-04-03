import AllProductsSection from '../AllProductsSection'
import PrimeDealsSection from '../PrimeDealsSection'

import Header from '../Header'

import './index.css'

const Products = () => (
  <>
    <Header activeSection="PRODUCTS" />
    <div className="product-sections">
      <PrimeDealsSection />
      <AllProductsSection />
    </div>
  </>
)

export default Products

import CategoryList from './components/CategoryList'
import FilterProduct from './components/FilterProduct'
import Header from './components/Header'
import ProBanner from './components/ProBanner'
import ProductList from './components/ProductList'
import { HomeUI } from './ui/Display'

function App() {
  return (
    <HomeUI>
      <Header />
      <FilterProduct />
      <CategoryList />
      <ProductList title="La tecnología que necesitas" type="technology" />
      <ProductList title="Vuelta a la rutina" type="routine" />
      <ProBanner />
    </HomeUI>
  )
}

export default App

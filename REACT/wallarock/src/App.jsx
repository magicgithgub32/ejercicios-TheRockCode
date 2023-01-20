import CategoryList from './components/CategoryList'
import FilterProduct from './components/FilterProduct'
import ProductList from './components/ProductList'
import { HomeUI } from './ui/Display'

function App() {
  return (
    <HomeUI>
      <FilterProduct />
      <CategoryList />
      <ProductList title="La tecnología que necesitas" type="technology" />
      <ProductList title="Vuelta a la rutina" type="routine" />
    </HomeUI>
  )
}

export default App

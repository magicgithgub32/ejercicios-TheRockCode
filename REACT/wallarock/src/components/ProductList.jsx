import { useState, useEffect } from 'react'
import technologyMocks from '../api/technologyMocks'
import routineMocks from '../api/routineMocks'
import { TitleH2 } from '../ui/Title'
import { CarouselUI } from '../ui/CarouselUI'
import { ProductLink, ProductListWrapper } from '../ui/Product'

const ProductList = ({ title, type }) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    if (type === 'technology') {
      setProducts(technologyMocks)
    } else if (type === 'routine') {
      setProducts(routineMocks)
    }
  }, [])

  return (
    <div>
      <TitleH2>{title}</TitleH2>
      <ProductListWrapper>
        <CarouselUI gap="16px">
          {products.map((product) => (
            <ProductLink
              key={product.title}
              src={product.src}
              href={product.href}
              title={product.title}
              ads={product.ads}
            />
          ))}
        </CarouselUI>
      </ProductListWrapper>
    </div>
  )
}

export default ProductList

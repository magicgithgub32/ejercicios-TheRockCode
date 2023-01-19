import { CategoryLink } from '../ui/Category'
import { useState, useEffect } from 'react'
import categoryMocks from '../api/categoryMocks'
import { TitleH2 } from '../ui/Title'
import { CarouselUI } from '../ui/CarouselUI'

const CategoryList = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    setCategories(categoryMocks)
  }, [])

  return (
    <div>
      <TitleH2>Descubre nuestras categorías</TitleH2>
      <CarouselUI>
        {categories.map((category) => (
          <CategoryLink
            key={category.title}
            src={category.src}
            title={category.title}
            href={category.href}
          />
        ))}
      </CarouselUI>
    </div>
  )
}

export default CategoryList

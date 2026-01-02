import { useEffect, useState } from 'react'
import { supabase } from '../services/supabase'

function Products() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')

      if (error) {
        console.error('Error al obtener productos:', error)
      } else {
        setProducts(data)
      }
    }

    fetchProducts()
  }, [])

  // Agrupar productos por categoría (base para recomendaciones)
  const groupedByCategory = products.reduce((acc, product) => {
    acc[product.category] = acc[product.category] || []
    acc[product.category].push(product)
    return acc
  }, {})

  return (
    <div>
      <h3>Productos disponibles</h3>

      {Object.keys(groupedByCategory).map((category) => (
        <div key={category}>
          <h4>Categoría: {category}</h4>

          {groupedByCategory[category].map((product) => (
            <div
              key={product.id}
              style={{
                border: '1px solid #ccc',
                margin: '10px 0',
                padding: '10px'
              }}
            >
              <h5>{product.name}</h5>
              <p>{product.description}</p>
              <p>
                <strong>Precio:</strong> ${product.price}
              </p>
              <p>
                <strong>Stock:</strong> {product.stock}
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Products
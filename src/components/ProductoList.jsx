import ProductoCard from './ProductoCard'

const ProductoList = ({ productos, carrito, onAgregar, cargando, error }) => {
  if (cargando) return <p className="mensaje">Cargando...</p>
  if (error) return <p className="mensaje error">{error}</p>

  return (
    <div className="grid">
      {productos.map((producto) => {
        const estaEnCarrito = carrito.some((p) => p.id === producto.id)

        return (
          <ProductoCard 
            key={producto.id} 
            producto={producto} 
            estaEnCarrito={estaEnCarrito} 
            onAgregar={onAgregar} 
          />
        )
      })}
    </div>
  )
}

export default ProductoList
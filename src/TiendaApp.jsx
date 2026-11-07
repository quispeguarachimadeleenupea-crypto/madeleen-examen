import  { useState }from 'react'
import ProductoList  from './components/ProductoList'
import CarritoPanel from './components/CarritoPanel'
import useProductos from './hooks/useProductos'

const TiendaApp = () => {
  
const { productos, cargando, error } = useProductos()
  const [carrito, setCarrito] = useState([])

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto])
  }

  
  const quitarDelCarrito = (idProducto) => {
    const nuevoCarrito = carrito.filter((p) => p.id !== idProducto)
    setCarrito(nuevoCarrito)
  }

  
  const vaciarCarrito = () => {
    setCarrito([])
  }

  
  const totalDinero = carrito.reduce((acumulador, producto) => acumulador + producto.price, 0)

  return (
    <div>
      <h1>Mini Tienda</h1>
      
      <div className="layout">
        <ProductoList 
          productos={productos} 
          carrito={carrito} 
          onAgregar={agregarAlCarrito} 
          cargando={cargando} 
          error={error} 
        />

        <CarritoPanel 
          carrito={carrito} 
          onQuitar={quitarDelCarrito} 
          onVaciar={vaciarCarrito} 
          total={totalDinero}
        />
      </div>
    </div>
   
  )
}
export default TiendaApp

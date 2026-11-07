const ProductosCard = ({producto, estaEnCarrito, onAgregar}) => {
  return (
    <div className={estaEnCarrito ? 'card en-carrito' : 'card'}>
      <img src={producto.thumbnail} alt={producto.title} />
      <h4>{producto.title}</h4>
      <p className="categoria">{producto.category}</p>
      <p className="precio">${producto.price}</p>
      
      <button 
        onClick={() => onAgregar(producto)} 
        disabled={estaEnCarrito}
      >
        {estaEnCarrito ? 'En el carrito' : 'Agregar al carrito'}
      </button>
    </div>

  )
}

export default ProductosCard

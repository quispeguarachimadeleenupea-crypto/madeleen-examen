const CarritoPanel = ({ carrito, onQuitar, onVaciar, total }) => {
  return (
    <aside className="carrito">
      <h3>Carrito ({carrito.length})</h3>
      
      <button onClick={onVaciar} style={{ marginBottom: '15px' }}>
        Vaciar Carrito
      </button>

      {carrito.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <ul>
          {carrito.map((producto) => (
            <li key={producto.id}>
              <img src={producto.thumbnail} alt={producto.title} />
              <span>{producto.title}</span>
              <button onClick={() => onQuitar(producto.id)}>❌</button>
            </li>
          ))}
        </ul>
      )}
      <div className="total">
        Total: ${total.toFixed(2)}
      </div>
    </aside>
  )
}

export default CarritoPanel

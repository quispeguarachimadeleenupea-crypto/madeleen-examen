import { useState, useEffect } from 'react'
import fetchProductos from '../Services/fetchProductos'

const useProductos = () => {
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const cargar = async () => {
      try {
        const data = await fetchProductos()

        console.log(data);

        setProductos(data)
      } catch (e) {
        setError('Error al cargar los productos')
      }
      setCargando(false)
    }
    cargar()
  }, [])

  return { productos, cargando, error }
}

export default useProductos
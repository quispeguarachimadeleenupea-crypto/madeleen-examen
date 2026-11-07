
const fetchProductos = async () => {
    const res= await fetch('https://dummyjson.com/products?limit=12');

  const data= await res.json();
  return data.products;
    
};

export default fetchProductos;

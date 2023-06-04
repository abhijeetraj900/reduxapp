import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadProducts } from '../../../redux/slices/productSlice'

function ProductList() {

  const dispatch = useDispatch()
  const  products = useSelector((state)=> state.productReducer.products);

  useEffect(()=> {

    fetchData()
    
  }, []);
  
async function fetchData() {
  const response = await fetch('https://api.escuelajs.co/api/v1/products');
  const data = await response.json();
  dispatch(loadProducts(data))
}

  return (
    <div>{products.map(item => <h3>{item.title}</h3>)}</div>
  )
}

export default ProductList;
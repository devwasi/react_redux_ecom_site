import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct } from '../../store/slices/productSlice'

const Home = () => {

  const {isError} = useSelector((state)=>state.productReducer)

  const dispatch = useDispatch()

  useEffect(()=>{
dispatch(fetchProduct())
},[])

console.log("selector", isError)
return (
  <>
    Home done data save in state 
    </>
  )
}

export default Home
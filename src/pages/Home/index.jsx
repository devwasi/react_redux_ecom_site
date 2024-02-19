import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct } from '../../store/slices/productSlice'
import CardCmp from '../../components/CardCmp'
import { Box, Grid } from '@mui/material'
import NavBar from '../../components/Navbar'

const Home = () => {

  const {isError, isLoading, products} = useSelector((state)=>state.productReducer)
  // const {addToCart} = useSelector((state)=>state.cartReducer)

  const dispatch = useDispatch()

  useEffect(()=>{
dispatch(fetchProduct())
},[])


// console.log("selector", addToCart)
return (
  <>
  <NavBar />
    {
isLoading ? "loading" :
    
    <Box mt={20}>

  <Grid container justifyContent={"center"} gap={2}>
    {
      products.map((product,index)=>{
        return <Grid item lg={3} >
          <CardCmp title={product.title} desc={product.description} image={product.image} product={product} />
        </Grid>
      })
    }
  </Grid>
    </Box>
}
    </>
  )
}

export default Home
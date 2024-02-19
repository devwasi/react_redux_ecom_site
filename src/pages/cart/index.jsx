import React from 'react'
import NavBar from '../../components/Navbar'
import { useSelector } from 'react-redux'
import { Box, Grid } from '@mui/material'
import CardCmp from '../../components/CardCmp'

const Cart = () => {
    const {addToCart} = useSelector((state)=>state.cartReducer)

  return (
    <>
    <NavBar />
    <Box mt={20}>

  <Grid container justifyContent={"center"} gap={2}>
    {
      addToCart.map((product,index)=>{
        return <Grid item lg={3} >
          <CardCmp title={product.title} desc={product.description} image={product.image} product={product} />
        </Grid>
      })
    }
  </Grid>
    </Box>
    </>
  )
}

export default Cart
import React from 'react'
import CustomDrawer from '../../user/components/customDrawer'
import Products from '../addToCart/products'

const Home = () => {
  return (
    <div className='user-home'>
       {/* tailwind css used in my project */}
      <div class="mx-3 my-2">
  <CustomDrawer />
</div>
    <Products />
    </div>
  )
}

export default Home